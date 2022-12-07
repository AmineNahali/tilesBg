console.log("script loaded !");
bg=0;
totbg=7;
bgp=0;
x=0;
y=0;
bgdist=1200;
chbg();
mvbg();

async function chbg() {
	while(true) {
		//Begin transition
		document.body.style.backgroundImage = "url('tiles/"+`${bg}`.toString()+".bmp')";
		bg ++;
		if (bg == totbg+1) {bg = 0;}
		await sleep(6000);
	}
}

async function mvbg() {
	while(true) {
		bgp++;
		if(bgp <= (bgdist/6)){x++;y++;}
		if(bgp >(bgdist/6) && bgp <= (bgdist/6)*2){x++;}
		if(bgp >(bgdist/6)*2 && bgp <= (bgdist/6)*3){x++;y--;}
		if(bgp >(bgdist/6)*3 && bgp <= (bgdist/6)*4){x--;y--;}
		if(bgp >(bgdist/6)*4 && bgp <= (bgdist/6)*5){x--;}
		if(bgp >(bgdist/6)*5 && bgp < bgdist){x--;y++;}
		if(bgp == bgdist){bgp =0;}
		document.body.style.backgroundPosition = `${x}px ${y}px`.toString();
		await sleep(30);
	}
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}