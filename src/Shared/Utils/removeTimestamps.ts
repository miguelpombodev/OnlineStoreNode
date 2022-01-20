export default function removeTimestamps(obj: any) {
  delete obj.CreatedAt;
  delete obj.UpdatedAt;
}
