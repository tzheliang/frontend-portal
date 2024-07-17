import { APIResponse, APIListResponse, User } from './types';

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

async function fetchUserList(page: number = 1): Promise<User[]> {
  const url = new URL('https://reqres.in/api/users');
  const pageSize = 6;

  url.searchParams.append('page', `${page}`);
  url.searchParams.append('per_page', `${pageSize}`);

  const res = await fetch(url.toString(), { method: 'GET' });

  if (!res.ok) throw new Error('API failed to load');

  const responseData: APIListResponse<User> = await res.json();

  let users: User[] = [...responseData.data];

  if (responseData.page < responseData.total_pages) {
    const moreUsers = await fetchUserList(page + 1);
    users = [...users, ...moreUsers];
  }

  return users;
}

async function fetchUser(userId: string): Promise<User> {
  const url = new URL(`https://reqres.in/api/users/${userId}`);

  const res = await fetch(url.toString(), { method: 'GET' });

  if (!res.ok) throw new Error('API failed to load');

  const { data: user }: APIResponse<User> = await res.json();

  return user;
}

export async function getUsers(): Promise<User[]> {
  const users = await fetchUserList();

  // mask it by default if get from list
  return users
    .filter(
      ({ first_name, last_name }) =>
        'G' === first_name[0].toUpperCase() ||
        'W' === last_name[0].toUpperCase()
    )
    .map((user) => {
      // mask the email
      const [prefix, suffix] = user.email.split('@');

      // mask prefix
      const newPrefix = maskWord(prefix);
      const newSuffix = maskWord(suffix);

      user.email = `${newPrefix}@${newSuffix}`;

      return user;
    });
}

export async function getUser(
  userId: string,
  maskEmail: boolean = true
): Promise<User> {
  const user = await fetchUser(userId);

  if (maskEmail) {
    // mask the email
    const [prefix, suffix] = user.email.split('@');

    // mask prefix
    const newPrefix = maskWord(prefix);
    const newSuffix = maskWord(suffix);

    user.email = `${newPrefix}@${newSuffix}`;
  }

  return user;
}
