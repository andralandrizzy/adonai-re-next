import { fetchProperties } from "@/utils";
import GetHomepageProperties from "./GetHomepageProperties";


const HomePropertiesListing = async () => {
    const homeData = await fetchProperties();
    const data = homeData.data
    // const properties = homeData.data.homes;
    // console.log(data);

    return (
        <>
            {<GetHomepageProperties properties={data} />}
        </>
    )
}

export default HomePropertiesListing