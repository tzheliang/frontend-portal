import { APIResponse, User } from './types';

function maskWord(str: string): string {
  let masked = '';

  if (str.length === 1) {
    masked = str;
  } else if (str.length === 2) {
    masked = `${str[0]}*`;
  } else {
    masked = `${str[0]}${'*'.repeat(str.length - 2)}${str[str.length - 1]}`;
  }

  return masked;
}

async function fetchAPI(page: number) {
  const url = new URL('https://reqres.in/api/users');
  const pageSize = 6;

  url.searchParams.append('page', `${page}`);
  url.searchParams.append('per_page', `${pageSize}`);

  const res = await fetch(url.toString(), { method: 'GET' });

  if (!res.ok) throw new Error('API failed to load');

  const responseData: APIResponse<User> = await res.json();
  return responseData;
}

export async function getUsers(
  currentPage: number = 1,
  maskEmail: boolean = false
): Promise<APIResponse<User>> {
  const response = await fetchAPI(currentPage);

  response.data = response.data
    .filter(
      ({ first_name, last_name }) =>
        'G' === first_name[0].toUpperCase() ||
        'W' === last_name[0].toUpperCase()
    )
    .map((user) => {
      if (maskEmail) {
        // mask the email
        const [prefix, suffix] = user.email.split('@');

        // mask prefix
        const newPrefix = maskWord(prefix);
        const newSuffix = maskWord(suffix);

        user.email = `${newPrefix}@${newSuffix}`;
      }

      return user;
    });

  return response;
}
