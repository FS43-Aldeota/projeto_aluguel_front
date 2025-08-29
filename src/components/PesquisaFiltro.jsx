const PesquisaFiltro = () => {
  return (

    <div class="rounded-md p-4 mb-6 bg-white">
      <div class="flex justify-between items-center mb-4">
        <div>
          <h2 class="text-sm font-semibold text-gray-600 mb-1">Casas para alugar &gt; CE</h2>
          <p class="text-orange-600 font-bold mb-4 text-lg">402 Casas para alugar em CE</p>
        </div>

        <div class="flex flex-col items-start border border-black/15 rounded-md px-3 py-2 gap-1">
          <label class="text-sm font-medium text-gray-600">Ordenar por</label>
          <select class="appearance-none text-orange-600 font-semibold bg-transparent focus:outline-none cursor-pointer">
            <option selected>Mais relevantes</option>
            <option>Mais recentes</option>
            <option>Menor preço</option>
            <option>Maior preço</option>
          </select>
        </div>

      </div>


      <div class="flex flex-wrap gap-2 mb-4">
        <button class="px-4 py-1 border border-black/15 text-gray-400 rounded-sm text-sm hover:text-orange-600 focus:ring-2 hover:ring-orange-500 hover:border-orange-500 outline-none transition">Cidade <span className="">1</span></button>
        <button class="px-4 py-1 border border-black/15 text-gray-400 rounded-sm text-sm hover:text-orange-600 focus:ring-2 hover:ring-orange-500 hover:border-orange-500 outline-none transition">Cidade 2</button>
        <button class="px-4 py-1 border border-black/15 text-gray-400 rounded-sm text-sm hover:text-orange-600 focus:ring-2 hover:ring-orange-500 hover:border-orange-500 outline-none transition">Cidade 3</button>
        <button class="px-4 py-1 border border-black/15 text-gray-400 rounded-sm text-sm hover:text-orange-600 focus:ring-2 hover:ring-orange-500 hover:border-orange-500 outline-none transition">Cidade 4</button>
        <button class="px-4 py-1 border border-black/15 text-gray-400 rounded-sm text-sm hover:text-orange-600 focus:ring-2 hover:ring-orange-500 hover:border-orange-500 outline-none transition">Cidade 5</button>
      </div>
    </div>
  )

}

export default PesquisaFiltro;