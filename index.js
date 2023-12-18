document.addEventListener("DOMContentLoaded", function () {
    const boxContainer = document.getElementById("boxContainer");
  
    const boxCount = 250; // Number of boxes you want
    
    for (let i = 0; i < boxCount; i++) {
      const box = document.createElement("div");
      box.classList.add("hoverBox");
      boxContainer.appendChild(box);
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".hoverBox");
    const resetDuration = 200; // Change this to the desired duration in milliseconds

    blocks.forEach((block) => {
      let tl = gsap.timeline({ paused: true });

      block.addEventListener("mouseover", () => {
        clearTimeout(block.timeoutId);
        tl.to(block, { opacity: 0.75, duration: 0.5, immediateRender: false })
          .to(block, { opacity: 0, duration: 0.5, delay: resetDuration / 1000 });
        tl.play();
      });
    });
  });

  // Smooth scroll function with GS

  function initSimulation() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Events = Matter.Events,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies;
  
    // create an engine
    var engine = Engine.create(),
      world = engine.world;
  
    // Get the container element and its dimensions
    var containerElement = document.querySelector(".tag-canvas");
    var containerWidth = containerElement.clientWidth + 2;
    var containerHeight = containerElement.clientHeight + 2;
  
    // create a renderer
    var render = Render.create({
      element: containerElement,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        pixelRatio: 2,
        background: "transparent",
        border: "none",
        wireframes: false
      }
    });
  
    // create bounds
    var ground = Bodies.rectangle(
      containerWidth / 2 + 160,
      containerHeight + 80,
      containerWidth + 320,
      160,
      { render: { fillStyle: "#000000" }, isStatic: true }
    );
    var wallLeft = Bodies.rectangle(
      -80,
      containerHeight / 2,
      160,
      containerHeight,
      { isStatic: true }
    );
    var wallRight = Bodies.rectangle(
      containerWidth + 80,
      containerHeight / 2,
      160,
      1200,
      { isStatic: true }
    );
    var roof = Bodies.rectangle(
      containerWidth / 2 + 160,
      -80,
      containerWidth + 320,
      160,
      { isStatic: true }
    );
  
    // object colors & variables
    var tagVideos = "#EDDC8C";
    var videos = "#B3E8F3";
    var abouts = "#4D4D4D";
  
    var border = 1;
    var radius = 20;
  
    // create objects
  
    // tagVideo & design
  var tagUiUx = Bodies.rectangle(containerWidth / 2 + 150, 500, 164, 56, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://assets-global.website-files.com/65523f13f8e3b9b3419c2a70/6552b4f29f416eb23e5a34e7_Group%20253.svg",
          xScale: 1,
          yScale: 1
        }
      }
    });
    var tagWordpress = Bodies.rectangle(containerWidth / 2 + 150, 460, 240, 56, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://assets-global.website-files.com/65523f13f8e3b9b3419c2a70/6552b4f279a0273441696a1e_Group%20249.svg",
          xScale: 1,
          yScale: 1
        }
      }
    });
    var tagWebflow = Bodies.rectangle(containerWidth / 2 + 250, 420, 200, 56, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://assets-global.website-files.com/65523f13f8e3b9b3419c2a70/6552b4f21765b2e18e2a9fd9_Group%20250.svg",
          xScale: 1,
          yScale: 1
        }
      }
    });
    var tagWhitelevel = Bodies.rectangle(containerWidth / 2 - 75, 380, 160, 56, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://assets-global.website-files.com/65523f13f8e3b9b3419c2a70/6552b4f27ef87da20e954ac6_Group%20244.svg",
          xScale: 1,
          yScale: 1
        }
      }
    });
    // video
    var tagWebflowgreen = Bodies.rectangle(
      containerWidth / 2 - 74,
      540,
      248,
      56,
      {
        chamfer: { radius: radius },
        render: {
          sprite: {
            texture:
              "https://assets-global.website-files.com/65523f13f8e3b9b3419c2a70/6552b4f2df37642477011998_Group%20248.svg",
            xScale: 1,
            yScale: 1
          }
        }
      }
    );
    var tagSass = Bodies.rectangle(containerWidth / 2 + 174, 490, 105, 56, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://assets-global.website-files.com/65523f13f8e3b9b3419c2a70/6552b4f2bd9c9e2a7d73c6e4_Group%20247.svg",
          xScale: 1,
          yScale: 1
        }
      }
    });
    var tagWeb = Bodies.rectangle(containerWidth / 2 - 142, 440, 186, 56, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://assets-global.website-files.com/65523f13f8e3b9b3419c2a70/6552b4f2b8ff6c8b58f4bab8_Group%20245.svg",
          xScale: 1,
          yScale: 1
        }
      }
    });
    var tagStartup = Bodies.rectangle(containerWidth / 2 - 10, 260, 128, 56, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://assets-global.website-files.com/65523f13f8e3b9b3419c2a70/6552b4f288a17b3a67b455a7_Group%20256.svg",
          xScale: 1,
          yScale: 1
        }
      }
    });
    //misc
    var tagMaintence = Bodies.rectangle(containerWidth / 2 - 242, 420, 168, 56, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://assets-global.website-files.com/65523f13f8e3b9b3419c2a70/6552b4f4a14626f897e44217_Group%20251.svg",
          xScale: 1,
          yScale: 1
        }
      }
    });
    var tagIntegration = Bodies.rectangle(containerWidth / 2 + 60, 380, 155, 56, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://assets-global.website-files.com/65523f13f8e3b9b3419c2a70/6552b4f4f66ea33eaedfe66e_Group%20252.svg",
          xScale: 1,
          yScale: 1
        }
      }
    });
    var tagMotion = Bodies.rectangle(containerWidth / 2, 360, 180, 56, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://assets-global.website-files.com/65523f13f8e3b9b3419c2a70/6552b4f4416b2c3c7f5d0599_Group%20246.svg",
          xScale: 1,
          yScale: 1
        }
      }
    });
    var tagPay = Bodies.rectangle(containerWidth / 2 - 59, 260, 172, 56, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://assets-global.website-files.com/65523f13f8e3b9b3419c2a70/6552b4f46ba585daae29999d_Group%20254.svg",
          xScale: 1,
          yScale: 1
        }
      }
    });
   
    // add all of the bodies to the world
    World.add(engine.world, [
      ground,
      wallLeft,
      wallRight,
      roof,
      tagUiUx,
      tagWordpress,
      tagWebflow,
      tagWhitelevel,
      tagWebflowgreen,
      tagSass,
      tagWeb,
      tagStartup,
      tagMaintence,
      tagIntegration,
      tagMotion,
      tagPay,
      
    ]);
  
    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });
  
    World.add(world, mouseConstraint);
  
    // keep the mouse in sync with rendering
    render.mouse = mouse;
  
    // Allow page scrolling in matter.js window
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
  
    // Detect clicks vs. drags
    let click = false;
  
    document.addEventListener("mousedown", () => (click = true));
    document.addEventListener("mousemove", () => (click = false));
    document.addEventListener("mouseup", () =>
      console.log(click ? "click" : "drag")
    );
  
    // Create a On-Mouseup Event-Handler
    Events.on(mouseConstraint, "mouseup", function (event) {
      var mouseConstraint = event.source;
      var bodies = engine.world.bodies;
      if (!mouseConstraint.bodyB) {
        for (i = 0; i < bodies.length; i++) {
          var body = bodies[i];
          // Check if clicked or dragged
          if (click === true) {
            if (
              Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)
            ) {
              var bodyUrl = body.url;
              console.log("Body.Url >> " + bodyUrl);
              // Hyperlinking feature
              if (bodyUrl != undefined) {
                //window.location.href = bodyUrl;
                window.open(bodyUrl, "_blank");
                console.log("Hyperlink was opened");
              }
              break;
            }
          }
        }
      }
    });
  
    // run the engine
    Engine.run(engine);
  
    // run the renderer
    Render.run(render);
  }
  
  // Get the container element
  var containerElement = document.querySelector(".tag-canvas");
  
  // Create an intersection observer
  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Initialize the simulation when the element is visible
        initSimulation();
  
        // Disconnect the observer after triggering the tagSocialstrategie
        observer.disconnect();
      }
    });
  }, {});
  
  // Observe the container element
  observer.observe(containerElement);