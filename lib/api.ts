// lib/api.ts
export async function apiGet(path: string) {
  const res = await fetch(path, { cache: 'no-store' });
  if (!res.ok) throw new Error('API error: ' + res.statusText);
  return res.json();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function apiPost(path: string, body: any) {
  const res = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error('API error: ' + res.statusText);
  return res.json();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function apiPut(path: string, body: any) {
  const res = await fetch(path, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error('API error: ' + res.statusText);
  return res.json();
}

