function checkTokenFB() {
    const userAccessToken = document.getElementById('token_FaceBook').value;

    const myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-US,en;q=0.9,vi;q=0.8");
    myHeaders.append("content-type", "application/x-www-form-urlencoded");
    myHeaders.append("origin", "https://developers.facebook.com");
    myHeaders.append("priority", "u=1, i");
    myHeaders.append("referer", "https://developers.facebook.com/");
    myHeaders.append("sec-ch-ua", "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-site");
    myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36");
    myHeaders.append("cookie", "datr=eGTQZcxUfqZ4M6USk1SbiWay; sb=eGTQZfbEN4uudhmrwZaaje0T; c_user=100027517012532; m_page_voice=100027517012532; x-referer=eyJyIjoiL2hvbWUucGhwIiwiaCI6Ii9ob21lLnBocCIsInMiOiJtIn0%3D; wl_cbv=v2%3Bclient_version%3A2464%3Btimestamp%3A1712909390; vpd=v1%3B844x390x3; ps_n=1; ps_l=1; xs=5%3A9R2gl2dbd7vXkA%3A2%3A1710143263%3A-1%3A6399%3A%3AAcX_oHi0spwOx5uRbCsUxqn0UVxQ7KnmWiE4L_H1PZlv; presence=EDvF3EtimeF1717870576EuserFA21B27517012532A2EstateFDutF0CEchF_7bCC; fr=1bB44b0ZQS4UHbGdQ.AWVmzVFeR5hr2qG_gP22m2EK7pE.BmZJuG..AAA.0.0.BmZKNP.AWWMTx9YcnQ; usida=eyJ2ZXIiOjEsImlkIjoiQXNlcnhmYWxuaG5ubCIsInRpbWUiOjE3MTc4NzE4NjV9; wd=1920x150; c_user=100093995626658; datr=Q9ADZvokGiZBoJqOPgAnMBvW; fr=1c2CHyOwy9Zlx92ic.AWWiEEKxRFQjRApeFZWDjUgW8l4.BmYcm8..AAA.0.0.BmYcsp.AWVf60Oql_c; ps_l=1; ps_n=1; xs=21%3ANSwzpsyneMKo6g%3A2%3A1712398583%3A-1%3A14099%3A%3AAcVkSSkzMpA4rSYcvE8sSqH5jzb4Ik0NOMM8hMZnNA");
    myHeaders.append("sec-ch-prefers-color-scheme", "light");
    myHeaders.append("sec-ch-ua-full-version-list", "\"Google Chrome\";v=\"125.0.6422.142\", \"Chromium\";v=\"125.0.6422.142\", \"Not.A/Brand\";v=\"24.0.0.0\"");
    myHeaders.append("sec-ch-ua-model", "\"\"");
    myHeaders.append("sec-ch-ua-platform-version", "\"10.0.0\"");
    myHeaders.append("x-asbd-id", "129477");
    myHeaders.append("x-fb-lsd", "cPS7IvHoKkL1HvXs5Kfdyd");
    myHeaders.append("Referer", "https://static.xx.fbcdn.net/rsrc.php/v3/yL/l/0,cross/gbzxfrE8u9X.css?_nc_x=ZELHAvPtn3B&_nc_eui2=AeEw6XkPSnSJDXcqLnnKQlyidXgtyXZJwix1eC3JdknCLGxEjiQ2lEbaUYcQccbExhOeY5DHrPD1ig5e2sDBfVmG");
    myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36");
    
    const urlencoded = new URLSearchParams();
    urlencoded.append("__usid", "6-Tsery2m1jih5d0:Psery34dv2zzd:0-Aserxfalnhnnl-RV=6:F=");
    urlencoded.append("__user", "100027517012532");
    urlencoded.append("__a", "1");
    urlencoded.append("__req", "16");
    urlencoded.append("__hs", "19882.BP:devsite_pkg.2.0..0.0");
    urlencoded.append("dpr", "1");
    urlencoded.append("__ccg", "EXCELLENT");
    urlencoded.append("__rev", "1014081395");
    urlencoded.append("__s", "ecqgdd:h0sb0s:qurt3h");
    urlencoded.append("__hsi", "7378201650605176621");
    urlencoded.append("__dyn", "7xeUmxa3-Q3S3mbwKBAgc9o9E6u5U4e1Fx-ewSwMxW0DUS2S1-x20BoiwBx60Vo1upE4W0y8467U2qxO2O1Vwooa81VohwnU14E9k2C220gG0D82IzU2Xwdq1iwmE2ewnE2Lx-0lK3qazo11E2ZwrU6C0yE2bwr81UU7u1rw");
    urlencoded.append("__csr", "");
    urlencoded.append("fb_dtsg", "NAcOku5GJRGl6UlDQ2Kzp8SZ0ALIXeRgXSJuE99cF11vhgDfpmvfZyw:5:1710143263");
    urlencoded.append("jazoest", "25379");
    urlencoded.append("lsd", "cPS7IvHoKkL1HvXs5Kfdyd");
    urlencoded.append("__usid", "6-Tsery2m1jih5d0:Psery34dv2zzd:0-Aserxfalnhnnl-RV=6:F=");
    urlencoded.append("__user", "100027517012532");
    urlencoded.append("__a", "1");
    urlencoded.append("__req", "17");
    urlencoded.append("__hs", "19882.BP:devsite_pkg.2.0..0.0");
    urlencoded.append("dpr", "1");
    urlencoded.append("__ccg", "EXCELLENT");
    urlencoded.append("__rev", "1014081395");
    urlencoded.append("__s", "ecqgdd:h0sb0s:qurt3h");
    urlencoded.append("__hsi", "7378201650605176621");
    urlencoded.append("__dyn", "7xeUmxa3-Q3S3mbwKBAgc9o9E6u5U4e1Fx-ewSwMxW0DUS2S1-x20BoiwBx60Vo1upE4W0y8467U2qxO2O1Vwooa81VohwnU14E9k2C220gG0D82IzU2Xwdq1iwmE2ewnE2Lx-0lK3qazo11E2ZwrU6C0yE2bwr81UU7u1rw");
    urlencoded.append("__csr", "");
    urlencoded.append("fb_dtsg", "NAcOku5GJRGl6UlDQ2Kzp8SZ0ALIXeRgXSJuE99cF11vhgDfpmvfZyw:5:1710143263");
    urlencoded.append("jazoest", "25379");
    urlencoded.append("lsd", "cPS7IvHoKkL1HvXs5Kfdyd");
    urlencoded.append("__usid", "6-Tsery2m1jih5d0:Psery34dv2zzd:0-Aserxfalnhnnl-RV=6:F=");
    urlencoded.append("__user", "100027517012532");
    urlencoded.append("__a", "1");
    urlencoded.append("__req", "18");
    urlencoded.append("__hs", "19882.BP:devsite_pkg.2.0..0.0");
    urlencoded.append("dpr", "1");
    urlencoded.append("__ccg", "EXCELLENT");
    urlencoded.append("__rev", "1014081395");
    urlencoded.append("__s", "ecqgdd:h0sb0s:qurt3h");
    urlencoded.append("__hsi", "7378201650605176621");
    urlencoded.append("__dyn", "7xeUmxa3-Q3S3mbwKBAgc9o9E6u5U4e1Fx-ewSwMxW0DUS2S1-x20BoiwBx60Vo1upE4W0y8467U2qxO2O1Vwooa81VohwnU14E9k2C220gG0D82IzU2Xwdq1iwmE2ewnE2Lx-0lK3qazo11E2ZwrU6C0yE2bwr81UU7u1rw");
    urlencoded.append("__csr", "");
    urlencoded.append("fb_dtsg", "NAcOku5GJRGl6UlDQ2Kzp8SZ0ALIXeRgXSJuE99cF11vhgDfpmvfZyw:5:1710143263");
    urlencoded.append("jazoest", "25379");
    urlencoded.append("lsd", "cPS7IvHoKkL1HvXs5Kfdyd");
    urlencoded.append("__usid", "6-Tsery2m1jih5d0:Psery34dv2zzd:0-Aserxfalnhnnl-RV=6:F=");
    urlencoded.append("__user", "100027517012532");
    urlencoded.append("__a", "1");
    urlencoded.append("__req", "19");
    urlencoded.append("__hs", "19882.BP:devsite_pkg.2.0..0.0");
    urlencoded.append("dpr", "1");
    urlencoded.append("__ccg", "EXCELLENT");
    urlencoded.append("__rev", "1014081395");
    urlencoded.append("__s", "ecqgdd:h0sb0s:qurt3h");
    urlencoded.append("__hsi", "7378201650605176621");
    urlencoded.append("__dyn", "7xeUmxa3-Q3S3mbwKBAgc9o9E6u5U4e1Fx-ewSwMxW0DUS2S1-x20BoiwBx60Vo1upE4W0y8467U2qxO2O1Vwooa81VohwnU14E9k2C220gG0D82IzU2Xwdq1iwmE2ewnE2Lx-0lK3qazo11E2ZwrU6C0yE2bwr81UU7u1rw");
    urlencoded.append("__csr", "");
    urlencoded.append("fb_dtsg", "NAcOku5GJRGl6UlDQ2Kzp8SZ0ALIXeRgXSJuE99cF11vhgDfpmvfZyw:5:1710143263");
    urlencoded.append("jazoest", "25379");
    urlencoded.append("lsd", "cPS7IvHoKkL1HvXs5Kfdyd");
    urlencoded.append("__usid", "6-Tsery2m1jih5d0:Psery34dv2zzd:0-Aserxfalnhnnl-RV=6:F=");
    urlencoded.append("__user", "100027517012532");
    urlencoded.append("__a", "1");
    urlencoded.append("__req", "1a");
    urlencoded.append("__hs", "19882.BP:devsite_pkg.2.0..0.0");
    urlencoded.append("dpr", "1");
    urlencoded.append("__ccg", "EXCELLENT");
    urlencoded.append("__rev", "1014081395");
    urlencoded.append("__s", "z1rarc:h0sb0s:qurt3h");
    urlencoded.append("__hsi", "7378201650605176621");
    urlencoded.append("__dyn", "7xeUmxa3-Q3S3mbwKBAgc9o9E6u5U4e1Fx-ewSwMxW0DUS2S1-x20BoiwBx60Vo1upE4W0y8467U2qxO2O1Vwooa81VohwnU14E9k2C220gG0D82IzU2Xwdq1iwmE2ewnE2Lx-0lK3qazo11E2ZwrU6C0yE2bwr81UU7u1rw");
    urlencoded.append("__csr", "");
    urlencoded.append("fb_dtsg", "NAcOku5GJRGl6UlDQ2Kzp8SZ0ALIXeRgXSJuE99cF11vhgDfpmvfZyw:5:1710143263");
    urlencoded.append("jazoest", "25379");
    urlencoded.append("lsd", "cPS7IvHoKkL1HvXs5Kfdyd");
    urlencoded.append("__usid", "6-Tsery2m1jih5d0:Psery34dv2zzd:0-Aserxfalnhnnl-RV=6:F=");
    urlencoded.append("__user", "100027517012532");
    urlencoded.append("__a", "1");
    urlencoded.append("__req", "1b");
    urlencoded.append("__hs", "19882.BP:devsite_pkg.2.0..0.0");
    urlencoded.append("dpr", "1");
    urlencoded.append("__ccg", "EXCELLENT");
    urlencoded.append("__rev", "1014081395");
    urlencoded.append("__s", "z1rarc:h0sb0s:qurt3h");
    urlencoded.append("__hsi", "7378201650605176621");
    urlencoded.append("__dyn", "7xeUmxa3-Q3S3mbwKBAgc9o9E6u5U4e1Fx-ewSwMxW0DUS2S1-x20BoiwBx60Vo1upE4W0y8467U2qxO2O1Vwooa81VohwnU14E9k2C220gG0D82IzU2Xwdq1iwmE2ewnE2Lx-0lK3qazo11E2ZwrU6C0yE2bwr81UU7u1rw");
    urlencoded.append("__csr", "");
    urlencoded.append("fb_dtsg", "NAcOku5GJRGl6UlDQ2Kzp8SZ0ALIXeRgXSJuE99cF11vhgDfpmvfZyw:5:1710143263");
    urlencoded.append("jazoest", "25379");
    urlencoded.append("lsd", "cPS7IvHoKkL1HvXs5Kfdyd");
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    };
    
    fetch("https://graph.facebook.com/v20.0/me/accounts?access_token=EAAGNO4a7r2wBO1yJbCjGqTrDtqszAPsirV9CxjOfggx7mZBBrVM5rYOmFOYTMOL2P6ZCpTO1JIn0AevwBU1ZBtw9bmWbL6AgVqkyjovqNnwYrxjCArNHKQTV4SlsjfJrtNrmlvg9VwXCPbeH7j4UmSeC8zvmtPYTrfJ5QxHOlwOvS1ZAO5jG5VjJju2ZA6K3UzeOrQxMSpQZDZD&fields=id%2C%20global_brand_page_name%2C%20access_token&format=json&limit=50&method=get&origin_graph_explorer=1&pretty=0&suppress_http_code=1&transport=cors", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));


}


