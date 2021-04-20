const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
let fileName = "";

const downloadBtn = document.getElementById("download-btn");

const uploadFile = document.getElementById("upload-file");

const revertBtn = document.getElementById("revert-btn");

//filters and effects
document.addEventListener("click",e=>{
    if(e.target.classList.contains("filter-btn"))
    {
        if(e.target.classList.contains("brightness-add"))
        {
            Caman("#canvas",img,function()
            {
                this.brightness(5).render();
            });
        }
        else if(e.target.classList.contains("brightness-remove"))
        {
            Caman("#canvas",img,function()
            {
                this.brightness(-5).render();
            });
        }
        else if(e.target.classList.contains("contrast-add"))
        {
            Caman("#canvas",img,function()
            {
                this.contrast(5).render();
            });
        }
        else if(e.target.classList.contains("contrast-remove"))
        {
            Caman("#canvas",img,function()
            {
                this.contrast(-5).render();
            });
        }
        else if(e.target.classList.contains("saturation-add"))
        {
            Caman("#canvas",img,function()
            {
                this.saturation(5).render();
            });
        }
        else if(e.target.classList.contains("saturation-remove"))
        {
            Caman("#canvas",img,function()
            {
                this.saturation(-5).render();
            });
        }
        else if(e.target.classList.contains("vibrance-add"))
        {
            Caman("#canvas",img,function()
            {
                this.vibrance(5).render();
            });
        }

        else if(e.target.classList.contains("vintage-add"))
        {
            Caman("#canvas",img,function()
            {
                this.vintage().render();
            });
        }

        else if(e.target.classList.contains("lomo-add"))
        {
            Caman("#canvas",img,function()
            {
                this.lomo().render();
            });
        }
 
        else if(e.target.classList.contains("clarity-add"))
        {
            Caman("#canvas",img,function()
            {
                this.clarity().render();
            });
        }

        else if(e.target.classList.contains("sincity-add"))
        {
            Caman("#canvas",img,function()
            {
                this.sincity().render();
            });
        }

        else if(e.target.classList.contains("crossprocess-add"))
        {
            Caman("#canvas",img,function()
            {
                this.crossprocess().render();
            });
        }

        else if(e.target.classList.contains("pinhole-add"))
        {
            Caman("#canvas",img,function()
            {
                this.pinhole().render();
            });
        }

        else if(e.target.classList.contains("nostalgia-add"))
        {
            Caman("#canvas",img,function()
            {
                this.nostalgia().render();
            });
        }
        else if(e.target.classList.contains("hermajesty-add"))
        {
            Caman("#canvas",img,function()
            {
                this.hermajesty().render();
            });
        }
    }
}) 

//remove filter
revertBtn.addEventListener("click",e =>{
    Caman("#canvas",img,function()
    {
        this.revert();
    });
});

//upload file
uploadFile.addEventListener("change", () => {
  //get file
  const file = document.getElementById("upload-file").files[0];
  //init filereader api
  const reader = new FileReader();

  //check for file
  if (file) {
    //set file name
    fileName = file.name;
    //read data as url
    reader.readAsDataURL(file);
  }

  //add image to canvas
  reader.addEventListener(
    "load",
    () => {
      //create image
      img = new Image();
      //set image src
      img.src = reader.result;
      //on image load add to canvas
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.removeAttribute("data-caman-id");
      };
    },
    false
  );
});


//download event
downloadBtn.addEventListener("click",()=>{
    //get ext
    const fileExtention=fileName.slice(-4);
    
    //init new file name
    let newFilename;

    if(fileExtention ===".jpg" || fileExtention ===".png")
    {
        //new file name
        newFilename=fileName.substring(0,fileName.length - 4) + "-edited.jpg";
    }

    //call download
    download(canvas,newFilename);

});

function download(canvas,fileName)
{
    //init event
    let e;
    //create link
    const link=document.createElement("a");
    //set props

    link.download=fileName;
    link.href=canvas.toDataURL("image/jpeg",0.8);
    //new mouse event

    e= new MouseEvent("click");
    //dispatch event
    link.dispatchEvent(e);

}