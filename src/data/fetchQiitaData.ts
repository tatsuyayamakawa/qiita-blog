import { QiitaItem } from "@/types/qiita";

const BASE_URL = "https://qiita.com/api/v2";

/**
 * 指定したユーザーのQiita記事を取得する
 */
export async function fetchUserItems(
  userId: string,
  page = 1,
  perPage = 20
): Promise<QiitaItem[]> {
  const url = `${BASE_URL}/users/${userId}/items?page=${page}&per_page=${perPage}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }, // 1時間キャッシュ
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Qiita items: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching Qiita items:", error);
    return [];
  }
}

/**
 * 指定したIDの記事詳細を取得する
 */
export async function fetchItemDetail(
  itemId: string
): Promise<QiitaItem | null> {
  const url = `${BASE_URL}/items/${itemId}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }, // 1時間キャッシュ
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Qiita item detail: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching Qiita item detail:", error);
    return null;
  }
}
