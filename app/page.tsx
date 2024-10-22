import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared/_index";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14 ">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={"Пиццы"}
                items={[
                  {
                    id: 1,
                    name: "гавайская",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF0234EAFD8424A3D86A21876DE68C.avif",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 2,
                    name: "гавайская",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 3,
                    name: "гавайская",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 4,
                    name: "гавайская",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 5,
                    name: "гавайская",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },

                  {
                    id: 6,
                    name: "гавайская",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title={"Комбо"}
                items={[
                  {
                    id: 1,
                    name: "гавайская",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF0234EAFD8424A3D86A21876DE68C.avif",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 2,
                    name: "гавайская",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 3,
                    name: "гавайская",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 4,
                    name: "гавайская",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 5,
                    name: "гавайская",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },

                  {
                    id: 6,
                    name: "гавайская",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
