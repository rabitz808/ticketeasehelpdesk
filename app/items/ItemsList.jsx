import Link from "next/link";
import Image from "next/image";

async function getBuildingMaterials() {
  const res = await fetch("https://api.tarkov.dev/graphql", {
    next: {
      revalidate: 60 * 5,
    },
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `{
        items(categoryNames: BuildingMaterial){
          id
          name
          normalizedName
          link
          gridImageLink
        }
      }`,
    }),
  });

  return res.json();
}

export default async function ItemsList() {
  const res = await getBuildingMaterials();

  return (
    <>
      {res.data.items.map((item) => {
        return (
          <div key={item.id} className="card">
            <div>
              <h2>{item.name}</h2>
              <a href={item.link}>
                <img src={item.gridImageLink} alt={item.normalizedName} />
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}
