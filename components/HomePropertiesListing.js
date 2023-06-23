import { fetchProperties } from "@/utils";
import GetHomepageProperties from "./GetHomepageProperties";


const HomePropertiesListing = async () => {
    const data = await fetchProperties();
    // const data = await homeData.data.homes;
    // const properties = homeData.data.homes;

    return (
        <>
            {<GetHomepageProperties properties={data} />}
        </>
    )
}

export default HomePropertiesListing