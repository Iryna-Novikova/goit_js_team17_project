export async function fetchArtists(page = 1, limit = 8) {
  const response = await fetch(`https://sound-wave.b.goit.study/api/artists?page=${page}&limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch artists');

  const data = await response.json();
  return data;
}
