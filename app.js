

const path = require('path');
const {readFile,writeFile,writeFileSync,readFileSync} = require('fs');

let cheminFichier1=path.resolve(__dirname,'content', 'subcontent' , 'first.txt');
let cheminFichier2=path.resolve(__dirname,'content', 'subcontent' , 'second.txt');
let cheminFichier3=path.resolve(__dirname,'content', 'subcontent' , 'fin.txt');
console.log (path.basename(cheminFichier1))
console.log (path.resolve(cheminFichier1))


const first = readFile(cheminFichier1,'utf8',(err,result)=>{

	if (err){
		return err
	}
	else {
		FinLecture(result)
		return
	}		
})

function FinLecture(contenu1){
	let contenu2 = readFileSync(cheminFichier2,'utf8')
	writeFileSync(
		cheminFichier3, 
		contenu1 + contenu2,
		{flag:'a'}
	)
}



/*
let contenu1 = readFileSync(cheminFichier1,'utf8')
let contenu2 = readFileSync(cheminFichier2,'utf8')
writeFileSync(
	cheminFichier3, 
	contenu1 + contenu2,
	{flag:'a'}
)*/

let contenu1= first














