//your code here
 let originalArray = [
        "https://picsum.photos/id/237/200/300",
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/200/300/",
        "https://picsum.photos/200/300?grayscale",
        "https://picsum.photos/200/300.jpg",
      ];

      function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
        }
      }
      const randomIndex = Math.floor(Math.random() * originalArray.length);
      const duplicateValue = originalArray[randomIndex];
      shuffleArray(originalArray);

      const finalArray = [...originalArray, duplicateValue];

      // Print the final array
      let str = "";
      finalArray.forEach((e, i) => {
        str =
          str +
          `<img class="img${i}" onclick="handleSelect(event)"  src=${e} alt="">`;
      });
      images.innerHTML = str;
      //   console.log(finalArray);

      let select1, select2;
      function handleSelect(e) {
        let element = e.target;
        // console.log(element.className);
        if (!select1) {
          select1 = element;
          element.style.border = "4px solid red";
          console.log("selected1");
          document.getElementsByClassName(
            "btn"
          )[0].innerHTML = `<button id="reset" onclick="handleReset()" type="reset">Reset</button>`;
        } else if (!select2 && select1.className != element.className) {
          select2 = element;
          element.style.border = "4px solid red";
          document.getElementsByClassName(
            "btn"
          )[0].innerHTML += `<button id="verify" onclick="handleVerify()" type="button">Verify</button>`;
          console.log("selected2");
        }

        // console.log("select1->",select1,"-------- select2",select2);
      }

      function handleReset() {
        select1.style.border = "0px";
        if (select2) select2.style.border = "0px";
        select1 = undefined;
        select2 = undefined;
        document.getElementsByClassName("btn")[0].innerHTML="";
        para.innerText="";
      }

      function handleVerify() {
        document.getElementsByClassName("btn")[0].innerHTML=""
        if (select1.src == select2.src) para.innerText=`You are a human. Congratulations!`;
        else para.innerText="We can't verify you as a human. You selected the non-identical tiles.";
      }
