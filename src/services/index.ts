export async function get(uri: string): Promise<any> {
  try {
    const res = await fetch(process.env.REACT_APP_BASE_URL + uri);
    return {
      status: res.status,
      result: await res.json(),
    };
  } catch (error) {
    console.error(error);
  }
}
