      // Change text content dynamically
      function changeText() {
        document.getElementById("text-to-change").textContent =
          "Our wool socks are crafted from 100% natural fibers for ultimate warmth!";
      }

      // Modify CSS styles via JavaScript
      function toggleHighlight() {
        const card = document.getElementById("card-2");
        card.style.backgroundColor =
          card.style.backgroundColor === "lightyellow" ? "#fff5f0" : "lightyellow";
      }

      // Add/remove an element
      let offerAdded = false;
      function addOrRemoveOffer() {
        const offerDiv = document.getElementById("dynamic-offer");
        if (!offerAdded) {
          const newParagraph = document.createElement("p");
          newParagraph.textContent = "🔥 Limited time offer: Buy 2 get 1 FREE!";
          newParagraph.style.color = "red";
          newParagraph.setAttribute("id", "offer-text");
          offerDiv.appendChild(newParagraph);
        } else {
          const existing = document.getElementById("offer-text");
          if (existing) offerDiv.removeChild(existing);
        }
        offerAdded = !offerAdded;
      }