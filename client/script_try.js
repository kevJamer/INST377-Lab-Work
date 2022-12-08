data = fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then(res =>  {
      if (res.ok) {
        console.log('Success');
      }  else {
        console.log('Failure');
      }
        res.json()
    })
    .then(data => console.log(data))