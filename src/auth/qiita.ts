import { QiitaUser } from "@/types/qiita";
import { qiitaConfig } from "../lib/config";

export async function getQiitaUser(): Promise<QiitaUser> {
  if (!qiitaConfig.accessToken) {
    throw new Error("Qiita access token is not set");
  }

  const response = await fetch("https://qiita.com/api/v2/authenticated_user", {
    headers: {
      Authorization: `Bearer ${qiitaConfig.accessToken}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 3600 }, // 1時間キャッシュ
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch Qiita user: ${response.status}`);
  }

  return response.json();
}
