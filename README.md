- This app was jointly developed by [michieet](https://github.com/michieet), [janiceyap](https://github.com/janiceyap), [m-chocolate](https://github.com/m-chocolate), [normanhfz](https://github.com/normanhfz) and [quackz90](https://github.com/QuackZ90) in a 5 days sprint as part of our module project for NTU / Skills Union software Developer Immersive Program.

- This app accepts a location input from the user, and returns the parking lot availability data of HDB carparks within 1 km radius of said location.
- Google map API is used to analyse the input from the user, and it returns the lat and long of lcoation entered.
- HDB parking lot availability and information data is provided by [data.gov.sg](https://data.gov.sg/dataset/carpark-availability) and [HDB](https://data.gov.sg/dataset/hdb-carpark-information) accordingly.
- To ensure up to date data, parking lot availability data is retrieved every 5 seconds, while the information data is retrieved once whenever the app starts.


Tools / packagesused for this project:
- React.js
- [React router dom](https://www.npmjs.com/package/react-router-dom)
- [Axios](https://www.npmjs.com/package/axios)
- [lodash](https://www.npmjs.com/package/lodash)
- [geolib](https://www.npmjs.com/package/geolib)
- [svy21](https://www.npmjs.com/package/svy21)

Deployed webpage may be viewed at [WhereCanPark](https://quackz90.github.io/sdimod2proj/)
*Note: To function fully, Google Map API key is required.
