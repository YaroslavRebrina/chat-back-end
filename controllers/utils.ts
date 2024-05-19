import { menuRecommendations } from './dataset';

export function getRecommendations({ dishName }: { dishName: string }) {
  const allKeys = Object.keys(menuRecommendations);
  const neededKey = allKeys.find((e) => dishName.includes(e));
  if (!neededKey) {
    return ['В нас немає рекомендацій до цієї позиції'];
  }

  return menuRecommendations[neededKey] || [];
}
