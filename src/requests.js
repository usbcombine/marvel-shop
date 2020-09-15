import md5 from "md5";

const PUBLIC_KEY = "849a770177ddec6dabe3270d70454b5e";
const PRIVATE_KEY = "5082642e42dd848bd8eb66351c5dc03c28448d74";

const API_URL = "https://gateway.marvel.com/v1/public";

export function getRequests({
  timestamp = Date.now(),
  orderBy = "modified",
  limit = 8,
  events = "",
} = {}) {
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  return {
    fetchComics: `${API_URL}/comics?orderBy=${orderBy}&limit=${limit}${
      events && "&events=" + events
    }&apikey=${PUBLIC_KEY}&ts=${timestamp}&hash=${hash}`,
  };
}
