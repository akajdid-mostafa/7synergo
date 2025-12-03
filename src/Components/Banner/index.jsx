import React, { useEffect, useRef } from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function BannerHomeSection() {
  const playerRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("banner-video-background", {
        videoId: "OC3kZOkJgN0",
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          loop: 1,
          playlist: "OC3kZOkJgN0",
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          disablekb: 1,
          modestbranding: 1,
          iv_load_policy: 3,
          origin: window.location.origin,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      window.onYouTubeIframeAPIReady();
    }

    function onPlayerReady(event) {
      event.target.playVideo();
      setYoutubeSize();
      window.addEventListener("resize", setYoutubeSize);
      handleYouTubeErrors();
    }

    function onPlayerStateChange(event) {
      if (event.data === window.YT.PlayerState.ENDED) {
        playerRef.current.playVideo();
      }
      if (event.data === window.YT.PlayerState.PLAYING) {
        playerRef.current.setPlaybackQuality("hd1080");
      }
    }

    function setYoutubeSize() {
      const container = videoContainerRef.current;
      if (!container || !playerRef.current?.getIframe) return;

      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const aspectRatio = 16 / 9;

      let newWidth, newHeight;
      if (containerWidth / containerHeight > aspectRatio) {
        newWidth = containerWidth;
        newHeight = containerWidth / aspectRatio;
      } else {
        newWidth = containerHeight * aspectRatio;
        newHeight = containerHeight;
      }

      const iframe = playerRef.current.getIframe();
      iframe.style.width = `${newWidth}px`;
      iframe.style.height = `${newHeight}px`;
    }

    function handleYouTubeErrors() {
      window.addEventListener("message", function (event) {
        if (event.origin !== "https://www.youtube.com") return;

        try {
          const data = JSON.parse(event.data);
          // Handle YouTube error messages if needed
          if (data && data.error) {
            console.error("YouTube error:", data.error);
          }
        } catch {
          // Ignore non-JSON messages
        }
      });
    }

    return () => {
      window.removeEventListener("resize", setYoutubeSize);
    };
  }, []);

  return (
    <div className="section-banner">
      <AnimateOnScroll animation="fadeInUp">
        <div
          ref={videoContainerRef}
          className="banner-video-container keep-dark"
        >
          <div id="banner-video-background"></div>
          <div className="hero-container position-relative">
            <div className="d-flex flex-column gspace-2">
              <AnimateOnScroll animation="fadeInLeft" speed="normal">
                <h1 className="title-heading-banner">
                  Harmonisez Corps & Esprit pour un Impact Durable
                </h1>
              </AnimateOnScroll>
              <div className="banner-heading">
                <AnimateOnScroll animation="fadeInUp" speed="normal">
                  <div className="banner-video-content order-lg-1 order-2">
                    <div className="d-flex flex-column flex-lg-row text-lg-start text-center align-items-center gspace-5">
                      <VideoButton videoUrl="https://www.youtube.com/watch?v=LAteUqIJBLY&pp=ygUPZml0bmVzcyBzZW5lcmd5?autoplay=1" />
                      <p>
                        Voyez comment nous transformons les défis en force.
                        Regardez notre vidéo de présentation.
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fadeInRight" speed="normal">
                  <div className="banner-content order-lg-2 order-1">
                    <p>
                      Synergo vous offre une approche 3-en-1 unique : Coaching
                      de Vie, Psychologie et Coaching Sportif. Bâtissez votre
                      résilience mentale et votre bien-être physique grâce à
                      notre méthode intégrée.
                    </p>
                    <div className="d-flex flex-md-row flex-column justify-content-center justify-content-lg-start align-self-center align-self-lg-start gspace-3">
                      <a href="./about" className="btn btn-accent">
                        <div className="btn-title">
                          <span>Nos Solutions</span>
                        </div>
                        <div className="icon-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </a>
                      <div className="banner-reviewer">
                        <div className="d-flex flex-row align-items-center">
                          <img
                            src="/assets/images/victor/victor1.webp"
                            alt="Reviewer"
                            className="avatar"
                          />
                          <img
                            src="/assets/images/victor/victor2.webp"
                            alt="Reviewer"
                            className="avatar"
                          />
                          <img
                            src="/assets/images/victor/victor3.webp"
                            alt="Reviewer"
                            className="avatar"
                          />
                        </div>
                        <div className="detail">
                          <span>Développement Personnel</span>
                          <span>et Résilience Mentale</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default BannerHomeSection;
