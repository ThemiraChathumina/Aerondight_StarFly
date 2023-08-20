// apiUtils.js

const fetchData = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const getData = async (apiUrl) => {
  try {
    const fetchedData = await fetchData(apiUrl);
    return fetchedData;
  } catch (error) {
    // Handle error if needed
    return {};
  }
};

const postData = async (apiUrl, data) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export { getData, postData };
