//objekt představuje prvek reálného světa
//příklad objektu: osoba, počítač, letadlo, budova, soubor
//každý objekt má vlastnosti: např. u osoby (váha, výška, věk, ...)
//objekty mohou vykonávat nějaké činnosti, které nazýváme funkce/metody


let personName = document.getElementById('person-name');
let personDesc = document.getElementById('person-desc');
let personAddress = document.getElementById('person-address');
let personImage = document.getElementById('person-image');

//pole objektů se chová stejně jako klasické pole, k objektu přistupujeme pomocí indexu
let persons = [
    {
        firstName: "Michal",
        lastName: "Kmiť",
        address: "Zlín",
        adult: true,
        bag: ["apple", "cookie", "water", "beer", "bread"],
        image: "assets/images/avatar_01.jpg",
        desc: "Zatím zde nebude žádný popis"
    },
    {
        firstName: "Miloš",
        lastName: "Vykroutil",
        address: "Praha",
        adult: true,
        image: "assets/images/avatar_02.jpg",
        desc: "Zatím zde nebude žádný popis"
    },
    {
        firstName: "Lubomír",
        lastName: "Zaorálek",
        address: "Praha",
        adult: false,
        image: "assets/images/avatar_03.jpg",
        desc: "Zatím zde nebude žádný popis"
    }
];



let positionCarousel = 0;
function nextPerson() {
    //pokud dosáhnu pozici carouselu o délce pole, tak se vrátím na začátek
    if(positionCarousel < persons.length - 1) {
        positionCarousel++;
        personName.innerText = persons[positionCarousel].firstName + " " + persons[positionCarousel].lastName;
        personDesc.innerText = persons[positionCarousel].desc;
        personAddress.innerText = persons[positionCarousel].address;
        personImage.src = persons[positionCarousel].image;
    }
    else {
        positionCarousel = 0;
        personName.innerText = persons[positionCarousel].firstName + " " + persons[positionCarousel].lastName;
        personDesc.innerText = persons[positionCarousel].desc;
        personAddress.innerText = persons[positionCarousel].address;
        personImage.src = persons[positionCarousel].image;
    }
}

//vrátí první hledaný element, který má shodu
let test = document.querySelector('.btn.test');
let anonymFunc = document.querySelector('.btn.af');

//použití deklarované funkce, což znamená že funkce má definované tělo v souboru. které můžeme opakovaně volat
test.addEventListener('click', helloWorld);
//použití anonymní funkce
anonymFunc.addEventListener('click', function() {
    console.log("Anonymní funkce");
});

//kratší zápis funkce, novější způsob zapisování
anonymFunc.addEventListener('click', () => {
    console.log("Další anonymní funkce");
});

//kdekoliv kliknu na webu, tak se zavolá anonymní funkce
//funkce má vstupní parametr "element"
document.addEventListener('click', function (element){
    //zjíštění kliknutého elementu
    if(element.target === personImage) {
        console.log("Kliknul jsi na obrázek");
    }
});

function helloWorld() {
    console.log("Ahoj světe");
}























//objekt osoba, vlastnosti bez uvozovek : hodnota

let car = {
    brand: "BMW",
    from: "Germany",
    oolor: "black",
    price: 10000
}



console.log(persons[0]); //přistoupím k prvnímu prvku pole
console.log(persons[0]['firstName']); //přístup k atributu daného objektu

//vloží nový objekt do pole
//persons.push(person);
//persons.push(car);


//výběr jednoho elementu na základě selektoru
//projde celý dokument a jakmile najde první shodný element, tak ho uloží do proměnné 'heading'
let heading = document.querySelector('h1');
//heading.innerText = person.firstName + " " + person.lastName;
let paragraph = document.querySelector('p');
//přístup do pole
//paragraph.innerText = person.bag[0];

//výpis obsahu batohu
/*
for(let i = 0; i < person.bag.length; i++) {
    document.write(person.bag[i]+'<br>');
}
 */