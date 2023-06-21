import { fetchProperties } from "@/utils";
import GetProperties from "./GetProperties"

const PropertiesPageListing = async () => {
  const properties = await fetchProperties();
  // const properties = await homeData.data.homes;
  return (
    <>
      {<GetProperties properties={properties} />}
    </>
  )
}

export default PropertiesPageListing