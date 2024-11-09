// // Initial setup for .gsap-video
// gsap.set(".gsap-video", {
//   width: "20%", // Start at 20% width of the .gsap parent
//   height: "20%", // Start at 20% height of the .gsap parent
//   opacity: 0.5, // Semi-transparent at the start
//   rotation: -40, // Initial rotation
//   borderRadius: "30px", // Capsule shape at the start
// });

// // Animate .gsap-video to expand when .gsap is scrolled
// gsap.to(".gsap-video", {
//   // Keep it centered in the x-axis
//   backgroundColor: "", // Optional: Set background color if needed
//   width: "100%", // Expands to full width of the .gsap parent
//   height: "100%", // Expands to full height of the .gsap parent
//   opacity: 1, // Full opacity at the end
//   rotation: 0, // Reset rotation to 0
//   borderRadius: "0px", // Maintain equal border radius
//   scrollTrigger: {
//     trigger: ".gsap", // Use the .gsap div as the trigger
//     start: "top 5%", // Start when the top of .gsap reaches the top of the viewport
//     end: "bottom top", // End when the bottom of .gsap reaches the top of the viewport
//     scrub: true, // Smooth animation while scrolling
//     pin: true, // Pin the .gsap div during the animation
//     anticipatePin: 1, // Smooth pinning transition
//   },
// });

// // Optional: Reset .gsap-video when scrolling back
// ScrollTrigger.create({
//   trigger: ".gsap",
//   start: "bottom top", // When the bottom of .gsap reaches the top of the viewport
//   onEnterBack: () => {
//     gsap.to(".gsap-video", {
//       width: "20%", // Return to 20% width
//       height: "20%", // Return to 20% height
//       opacity: 0.5, // Return to semi-transparent
//       rotation: -40, // Rotate back to initial degrees
//       borderRadius: "0px", // Maintain equal border radius
//     });
//   },
// });

gsap.set(".gsap-video", {
  width: "20%", // Start at 20% width of the .gsap parent
  height: "20%", // Start at 20% height of the .gsap parent
  opacity: 0.5, // Semi-transparent at the start
  rotation: -40, // Initial rotation
  borderRadius: "30px", // Capsule shape at the start
});

// Animate .gsap-video to expand when .gsap is scrolled
gsap.to(".gsap-video", {
  backgroundColor: "", // Optional: Set background color if needed
  width: "100%", // Expands to full width of the .gsap parent
  height: "100%", // Expands to full height of the .gsap parent
  opacity: 1, // Full opacity at the end
  rotation: 0, // Reset rotation to 0
  borderRadius: "0px", // Set border radius to 0
  ease: "power2.inOut", // Easing function for smooth transition
  scrollTrigger: {
    trigger: ".gsap", // Use the .gsap div as the trigger
    start: "top 5%", // Start when the top of .gsap reaches 5% from the top of the viewport
    end: "bottom top", // End when the bottom of .gsap reaches the top of the viewport
    scrub: true, // Smooth animation while scrolling
    pin: true, // Pin the .gsap div during the animation
    anticipatePin: 1, // Smooth pinning transition
    onUpdate: (self) => {
      const video = document.getElementById("myVideo");
      // Check if .gsap-video dimensions are at least 50% of the parent
      if (self.progress >= 0.5) {
        video.style.opacity = 1; // Show video if width and height are at least 50%
        video.play(); // Play video
      } else {
        video.style.opacity = 0; // Hide video if not
        video.pause(); // Pause video
      }
    },
  },
});

// Control video play based on scroll
let scrollTimeout;
let isScrolling = false;

// Function to handle scrolling
const handleScroll = () => {
  const video = document.getElementById("myVideo");

  // Only proceed if video is visible
  if (video.style.opacity == "1") {
    video.play(); // Play video when scrolling
    isScrolling = true;

    // Clear any existing timeout
    clearTimeout(scrollTimeout);

    // Set a timeout to pause the video after scrolling stops
    scrollTimeout = setTimeout(() => {
      video.pause(); // Pause video when scrolling stops
      isScrolling = false;
    }, 100); // Adjust timeout duration as needed (100ms)
  }
};

// Listen for scroll events
window.addEventListener("wheel", handleScroll);
window.addEventListener("scroll", handleScroll);

// Optional: Reset .gsap-video when scrolling back
ScrollTrigger.create({
  trigger: ".gsap",
  start: "bottom top", // When the bottom of .gsap reaches the top of the viewport
  onEnterBack: () => {
    gsap.to(".gsap-video", {
      width: "20%", // Return to 20% width
      height: "20%", // Return to 20% height
      opacity: 0.5, // Return to semi-transparent
      rotation: -40, // Rotate back to initial degrees
      borderRadius: "30px", // Maintain border radius
      ease: "power2.inOut", // Easing for the reset animation
    });
    const video = document.getElementById("myVideo");
    video.style.opacity = 0; // Hide video when resetting
    video.pause(); // Pause video when resetting
  },
});
// aman chaudhary
// gsap.registerPlugin(ScrollTrigger);

// // Initialize Locomotive Scroll
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#amn"),
//   smooth: true,
// });

// // Each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // Tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element
// ScrollTrigger.scrollerProxy("#amn", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
//   pinType: document.querySelector("#amn").style.transform
//     ? "transform"
//     : "fixed",
// });

// // Each time the window updates, refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // After everything is set up, refresh() ScrollTrigger and update LocomotiveScroll
// ScrollTrigger.refresh();
function loader() {
  var tl = gsap.timeline();
  tl.from(".loader m", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });
  tl.to(".loader m", {
    opacity: 0,
    x: -40,
    duration: 1,
    stagger: 0.1,
  });
  tl.to(".loader", {
    opacity: 0,
  });
  tl.to(".loader", {
    display: "none",
  });
}
loader();
