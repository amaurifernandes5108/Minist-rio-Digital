import React, { useState } from 'react';

const BioDesigner = () => {
  const [activeTab, setActiveTab] = useState('sobre');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const tabs = [
    { id: 'sobre', label: 'Sobre', icon: '🙏' },
    { id: 'biblioteca', label: 'Biblioteca', icon: '📚' },
    { id: 'loja', label: 'Loja', icon: '🛒' },
    { id: 'agenda', label: 'Agenda', icon: '📅' },
    { id: 'contato', label: 'Contato', icon: '✉️' }
  ];

  // Categorias para a biblioteca digital
  const categorias = [
    { id: 'todos', nome: 'Todos' },
    { id: 'sermoes', nome: 'Sermões' },
    { id: 'estudos', nome: 'Estudos' },
    { id: 'devocional', nome: 'Devocionais' }
  ];

  // Dados do perfil (personalize conforme necessário)
  const profileData = {
    nome: 'Pastor Amauri Fernandes',
    descricao: 'Pastor • Pregador • Mentor Espiritual',
    sobre: 'Bem-vindo ao nosso Ministério Digital! Sou Pastor Amauri Fernandes e tenho dedicado minha vida a compartilhar a Palavra de Deus e auxiliar pessoas em sua jornada espiritual. Aqui você encontrará recursos para crescer na fé e fortalecer seu relacionamento com Deus.',
    versiculo: '"Porque a palavra de Deus é viva e eficaz..." - Hebreus 4:12',
    links: [
      { nome: 'Instagram', url: 'https://instagram.com/pastoramaurifernandes', icone: '📸' },
      { nome: 'YouTube', url: 'https://youtube.com/pastoramaurifernandes', icone: '🎬' },
      { nome: 'Facebook', url: 'https://facebook.com/pastoramaurifernandes', icone: '👥' },
      { nome: 'TikTok', url: 'https://tiktok.com/@pastoramaurifernandes', icone: '📱' },
      { nome: 'Twitter/X', url: 'https://twitter.com/pamauri', icone: '🐦' },
      { nome: 'Podcast', url: 'https://spotify.com/show/pastoramaurifernandes', icone: '🎙️' },
      { nome: 'WhatsApp', url: 'https://wa.me/seuNumero', icone: '📞' },
      { nome: 'Doações', url: 'https://doe.com/pastoramaurifernandes', icone: '❤️' },
    ],
    biblioteca: [
      { id: 1, titulo: 'O Poder da Oração', categoria: 'sermoes', formato: 'PDF' },
      { id: 2, titulo: 'Estudo sobre Gálatas', categoria: 'estudos', formato: 'PDF' },
      { id: 3, titulo: 'Devocional de 21 dias', categoria: 'devocional', formato: 'PDF' },
      { id: 4, titulo: 'Fundamentos da Fé', categoria: 'estudos', formato: 'PDF' },
      { id: 5, titulo: 'Sermão: Vida Abundante', categoria: 'sermoes', formato: 'Áudio' },
      { id: 6, titulo: 'Família segundo a Bíblia', categoria: 'estudos', formato: 'PDF' },
    ],
    produtos: [
      { id: 1, nome: 'Livro: Jornada de Fé', preco: 'R$ 49,90', destaque: true },
      { id: 2, nome: 'E-book: Orações Poderosas', preco: 'R$ 29,90', destaque: false },
      { id: 3, nome: 'Curso Online: Liderança Cristã', preco: 'R$ 197,00', destaque: true },
      { id: 4, nome: 'Devocional Impresso', preco: 'R$ 39,90', destaque: false },
    ],
    eventos: [
      { id: 1, data: '20/05', titulo: 'Culto de Adoração', horario: '19h' },
      { id: 2, data: '22/05', titulo: 'Estudo Bíblico', horario: '20h' },
      { id: 3, data: '24/05', titulo: 'Reunião de Jovens', horario: '18h' },
      { id: 4, data: '27/05', titulo: 'Seminário Online', horario: '15h' },
    ],
    contato: {
      email: 'pastor@ministerio.com',
      telefone: '+55 (00) 00000-0000',
      mensagem: 'Entre em contato para aconselhamento, dúvidas ou parcerias ministeriais!'
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'sobre':
        return (
          <div className="p-4 text-center">
            <p className="text-lg mb-4">{profileData.sobre}</p>
            <div className="bg-blue-50 p-3 rounded-lg mb-4 italic border-l-4 border-yellow-500">
              <p className="text-sm text-blue-800">{profileData.versiculo}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <h3 className="font-bold text-blue-800">Sermões</h3>
                <p>300+</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <h3 className="font-bold text-yellow-700">Estudos</h3>
                <p>120+</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <h3 className="font-bold text-blue-800">Livros</h3>
                <p>12</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <h3 className="font-bold text-yellow-700">Anos de Ministério</h3>
                <p>15+</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-bold text-blue-800 mb-3">Minhas Redes Sociais</h3>
              <div className="grid grid-cols-4 gap-3">
                {profileData.links.slice(0, 8).map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url}
                    className="flex flex-col items-center"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-full hover:opacity-90 transition-opacity mb-1">
                      <span className="text-xl">{link.icone}</span>
                    </div>
                    <span className="text-xs text-gray-700">{link.nome}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'biblioteca':
        return (
          <div className="p-4">
            <div className="flex overflow-x-auto space-x-2 pb-2 mb-4">
              {categorias.map((categoria) => (
                <button
                  key={categoria.id}
                  className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${
                    selectedCategory === categoria.id 
                      ? 'bg-blue-700 text-white' 
                      : 'bg-gray-200 text-gray-800'
                  }`}
                  onClick={() => setSelectedCategory(categoria.id)}
                >
                  {categoria.nome}
                </button>
              ))}
            </div>
            
            <div className="flex flex-col space-y-3">
              {profileData.biblioteca
                .filter(item => selectedCategory === 'todos' || item.categoria === selectedCategory)
                .map((item) => (
                  <div 
                    key={item.id} 
                    className="flex justify-between items-center p-3 bg-blue-50 border border-blue-100 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div>
                      <h3 className="font-medium text-blue-800">{item.titulo}</h3>
                      <p className="text-sm text-gray-600">{item.formato}</p>
                    </div>
                    <button className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      ⬇️
                    </button>
                  </div>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <a href="#" className="text-blue-700 font-medium">Ver biblioteca completa →</a>
            </div>
          </div>
        );
      
      case 'loja':
        return (
          <div className="p-4">
            <h2 className="text-lg font-bold mb-3 text-center text-blue-800">Produtos em Destaque</h2>
            <div className="grid grid-cols-2 gap-3">
              {profileData.produtos.map((produto) => (
                <div 
                  key={produto.id} 
                  className={`p-3 rounded-lg border ${produto.destaque ? 'border-yellow-300 bg-yellow-50' : 'border-blue-200 bg-blue-50'}`}
                >
                  <div className="aspect-square bg-white rounded-lg mb-2 flex items-center justify-center border border-gray-200">
                    <img 
                      src={`/api/placeholder/200/200`} 
                      alt={produto.nome}
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-sm text-blue-800">{produto.nome}</h3>
                  <p className="text-yellow-600 font-bold">{produto.preco}</p>
                  <button className="w-full mt-2 py-1 bg-blue-700 text-white rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">
                    Comprar
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <a href="#" className="text-blue-700 font-medium">Ver loja completa →</a>
            </div>
          </div>
        );
      
      case 'agenda':
        return (
          <div className="p-4">
            <h2 className="text-lg font-bold mb-3 text-center text-blue-800">Próximos Eventos</h2>
            <div className="flex flex-col space-y-3">
              {profileData.eventos.map((evento) => (
                <div 
                  key={evento.id} 
                  className="flex items-center p-3 bg-blue-50 border border-blue-100 rounded-lg"
                >
                  <div className="w-12 h-12 bg-blue-700 text-yellow-300 rounded-lg flex flex-col items-center justify-center mr-3">
                    <span className="text-xs">MAI</span>
                    <span className="font-bold">{evento.data.split('/')[0]}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-blue-800">{evento.titulo}</h3>
                    <p className="text-sm text-gray-600">{evento.horario}</p>
                  </div>
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    +
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <a href="#" className="text-blue-700 font-medium">Ver calendário completo →</a>
            </div>
          </div>
        );
      
      case 'contato':
        return (
          <div className="p-4">
            <div className="bg-blue-50 p-4 rounded-lg mb-4 border border-blue-100">
              <p className="mb-3 text-blue-800">{profileData.contato.mensagem}</p>
              <div className="flex items-center mb-2">
                <span className="mr-2">✉️</span>
                <span className="text-blue-800">{profileData.contato.email}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📱</span>
                <span className="text-blue-800">{profileData.contato.telefone}</span>
              </div>
            </div>
            
            <div className="bg-blue-700 text-white p-3 rounded-lg text-center font-medium cursor-pointer hover:bg-blue-800 transition-colors mb-3">
              Solicitar Aconselhamento
            </div>
            
            <div className="bg-yellow-500 text-white p-3 rounded-lg text-center font-medium cursor-pointer hover:bg-yellow-600 transition-colors">
              Agendar Palestra/Evento
            </div>
          </div>
        );
      
      default:
        return <div>Conteúdo não encontrado</div>;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Cabeçalho do Perfil */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-4 text-center text-white">
        <div className="w-24 h-24 rounded-full bg-white mx-auto mb-3 overflow-hidden border-4 border-yellow-500">
          <img 
            src="/api/placeholder/200/200" 
            alt="Foto do Pastor Amauri" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-xl font-bold">{profileData.nome}</h1>
        <p className="opacity-90 text-yellow-300">{profileData.descricao}</p>
      </div>
      
      {/* Conteúdo da Aba Ativa */}
      <div className="min-h-64">
        {renderTabContent()}
      </div>
      
      {/* Menu de Navegação */}
      <div className="flex border-t border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 py-3 flex flex-col items-center justify-center transition-colors ${
              activeTab === tab.id ? 'text-blue-700' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="text-xl mb-1">{tab.icon}</span>
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BioDesigner;