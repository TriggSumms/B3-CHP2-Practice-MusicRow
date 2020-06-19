//Creating an object to store the arrays
let jumpStopRecords = [];
let chattenRecords= [];
let polarRecords= [];



//Need to create 5 different factory functions 
const createCountryArtist = (fullName, genre, age) => {
	const lilBanjoBabi  = {
        fullName: fullName,
        genre: genre,
        age: age
	}

	return lilBanjoBabi ;
}


const createPopArtist = (fullName, genre, age) => {
	const terribleMusic = {
        fullName: fullName,
        genre: genre,
        age: age
	}

	return terribleMusic;
}


const createFunkArtist = (fullName, genre, age) => {
	const thaGoodStuff = {
        fullName: fullName,
        genre: genre,
        age: age
	}

	return thaGoodStuff;
}


const createRapArtist = (fullName, genre, age) => {
	const  hellYuhObject= {
        fullName: fullName,
        genre: genre,
        age: age
	}

	return hellYuhObject;
}


const createBlueGrassArtist = (fullName, genre, age) => {
	const bingBow = {
        fullName: fullName,
        genre: genre,
        age: age
	}

	return bingBow;
}


//Objects and paramaters created....time to push details to all the required Artists
const bruce = createCountryArtist("Bruce Atkins", "Country", 23)
chattenRecords.push(bruce)
const jensen = createPopArtist("Jensen Brown", "Pop", 20)
polarRecords.push(jensen)
const dre = createFunkArtist("Dre Funkz", "Funk", 25)
jumpStopRecords.push(dre)
const Dusta = createRapArtist("Dusta Grimez", "Rap", 21)
jumpStopRecords.push(Dusta)
const bartholomew = createBlueGrassArtist("Bartholomew Danielson", "BlueGrass", 23)
chattenRecords.push(bartholomew)
const Avilee = createCountryArtist("Avilee Dallas", "Country", 19)
chattenRecords.push(Avilee)
const Austin = createPopArtist("Autin Kinkaid", "Pop", 22)
polarRecords.push(Austin)
const Loyonce = createRapArtist("Loyonce Branis", "Rap", 27)
jumpStopRecords.push(Loyonce)


//Could possibly use a method to filter and place peeps into 3 Record Labels
console.log(polarRecords)