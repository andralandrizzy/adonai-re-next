import { fetchProperties } from "@/utils";
import GetProperties from "./GetProperties"

const PropertiesPageListing = async () => {
  const homeData = await fetchProperties();
  const properties = homeData.data.homes;
  return (
    <>
      {<GetProperties properties={properties} />}
    </>
  )
}

export default PropertiesPageListing