import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import Link from "next/link";


export default function Index(){
  return(
    <div>
      
      

      <Header 
      title="TreinaCook"
      />

      <main>
      <RecipeCard
          name="Brigadeiro"
          picture="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg"
          category="Doce"
          link="receitas/doces/brigadeiros"
        />
      </main>
    
      <main>
      <RecipeCard
          name="Bolo de Cenoura"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?mode=crop&width=710&height=400"
          category="Bolos"
          link="receitas/bolos/bolo-de-cenoura"
        />
      </main>

      <main>
      <RecipeCard
          name="Bolinho de Chuva"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/076/049/322657/322657_original.jpg?mode=crop&width=710&height=400"
          category="Lanche"
          link="receitas/lanche/bolinho-de-chuva"
        />
      </main>

      <main>
      <RecipeCard
          name="Molho Branco"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/008/072/320870/320870_original.jpg?mode=crop&width=710&height=400"
          category="Molhos"
          link="receitas/molhos/molho-branco"
        />
      </main>

      <Footer />
    </div>
  )

}
