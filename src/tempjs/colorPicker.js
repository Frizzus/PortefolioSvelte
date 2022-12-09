class TSLColor{
    constructor(teinte = 180, saturation = "100%", lumiere = "50%"){
        this.teinte = teinte;
        this.saturation = saturation;
        this.lumiere = lumiere;
    }

    setOption(option) {
        switch (option) {
            case "pastel":
                this.saturation = "70%";
                this.lumiere = "80%";
                this.option = option;
                break;
            case "equilibre":
                this.saturation = "60%";
                this.lumiere = "50%";
                this.option = option;
                break;
            case "sombre":
                this.saturation = "90%";
                this.lumiere = "20%";
                this.option = option;
                break;
            case "sature":
                this.saturation = "100%";
                this.lumiere = "50%";
                this.option = option;
                break;
        }
    }

    toStyle(){
        return "hsl("+this.teinte+", "+this.saturation+", "+this.lumiere+")";
    }
}

const picker = document.getElementById("picker");
const pickerSelect = picker.children[0];
const pickerImg = picker.children[1];
const styleSelects = picker.getElementsByTagName("form")[0];
const teinteBar = document.getElementById("hsl");
const button = picker.getElementsByTagName("button")[0];
const docStyle = document.documentElement.style;
const navLinks = document.getElementsByClassName("lwf");
let view = document.querySelector("#colorView");
let isDeployed = false;
let color = new TSLColor();
let complementaryColor = new TSLColor();
let laboColor = new TSLColor();
let laboNeon = new TSLColor(0, "100%", "62%");

function deployPicker() {
    picker.focus();
    if (!isDeployed) {
        picker.style.width = "20em";
        picker.style.height = "15em";
        pickerSelect.style.display = "flex";
        pickerImg.style.display = "none";
        isDeployed = true;
    }
    
}

// le colorpicker doit se retirer si il est déployé et si l'évenement focusout focus un élément extérieur au picker (sinon les inout à l'intérieur du colorpicker fermerait l'onglet à chaque fois que l'on veut changer le valeur)
function retrievePicker(event) {
    if (isDeployed && isFocusOut(event)) {
        picker.style.width = "4em";
        picker.style.height = "8vh";
        pickerSelect.style.display = "none";
        pickerImg.style.display = "block";
        isDeployed = false;
    }
}

function switchStyle(event) {
    color.setOption(event.target.id);
    changeViewStyle();
}

function setColor(event) {
    color.teinte = event.target.value;
    docStyle.setProperty("--teinteThumbColor", "hsl(" + event.target.value + ", 100%, 50%)");
    changeViewStyle();
}

function changeViewStyle() {
    docStyle.setProperty("--pickerColor", color.toStyle());

    // --secondaryColor
    complementaryColor.teinte = (color.teinte + 180)%360;
    complementaryColor.saturation = color.saturation;
    complementaryColor.lumiere = color.lumiere;
    docStyle.setProperty("--pickerCColor", complementaryColor.toStyle());
}

function changePageStyle(event){
    event.preventDefault();
    docStyle.setProperty("--primaryColor", color.toStyle());
    docStyle.setProperty("--secondaryColor", complementaryColor.toStyle());

    // --laboColor
    laboColor.teinte = color.teinte;
    docStyle.setProperty("--laboColor", laboColor.toStyle());

    // --laboNeon
    laboNeon.teinte = color.teinte;
    docStyle.setProperty("--laboNeon", laboNeon.toStyle());
}

// faire en sorte que picker ne perde pas le focus quand on clique à l'intérieur
function isFocusOut(event) {
    let isOut = true;

    [...pickerSelect.children].forEach(element => {
        if (element === event.relatedTarget) {
            isOut = false;
        }
    });
    return isOut;
}

export function EnableColorPicker() {
    // aggrandir et rétrécir l'onglet
    picker.addEventListener("click", deployPicker);
    picker.addEventListener("focusout", retrievePicker);
    // détecter et changer le changement de style de couleur
    styleSelects.addEventListener("change", switchStyle);
    // détecter et changer le changement de teinte
    teinteBar.addEventListener("mousemove", setColor);
    teinteBar.addEventListener("change", setColor);
    // détecter et changer la couleur à l'appuie du bouton pour changer le theme de la page
    button.addEventListener("click", changePageStyle);
    // setup des valeur au lancement de la page
    teinteBar.addEventListener("load", setColor);
}