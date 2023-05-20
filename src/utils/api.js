export const fetchData = async () => {
    try {
      const response = await fetch('https://646312614dca1a661353d0ee.mockapi.io/api/Files');
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };