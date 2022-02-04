var sum=0;
for(var i=1; i<=10; i++){
	sum+=i;
}
postMessage(sum); //결과값을 워커객체에 보냄