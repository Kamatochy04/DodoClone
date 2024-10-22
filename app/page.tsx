import { Container, Filters, Title, TopBar } from "@/components/shared/_index";
import { ProductCard } from "@/components/shared/product-card";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14 ">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard
                id={0}
                name={"Пицца с ананасами"}
                price={550}
                imageUrl="https://media.dodostatic.net/image/r:292x292/11EF6B5C4F298D26AF9EDAE2CB73D872.avif"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
