/** @type {import('tailwindcss').Config} */
export default {
  // Lista de arquivos que o Tailwind deve analisar para encontrar classes
  content: [
    "./index.html",             // O arquivo HTML principal na raiz
    "./pages/**/*.{html,js}",   // Todos os arquivos .html e .js dentro da pasta /pages
    "./src/**/*.{html,js}",     // Todos os arquivos .html e .js dentro da pasta /src (inclui app.js, main.js, templates.js)
  ],
  darkMode: 'class', // Habilita o modo escuro baseado na classe .dark no HTML
  theme: {
    extend: {
      // Suas personalizações de tema (cores, fontes, tamanhos)
      colors: {
        'primary': { '50': '#f0f9ff', '100': '#e0f2fe', '200': '#bae6fd', '300': '#7dd3fc', '400': '#38bdf8', '500': '#0ea5e9', '600': '#0284c7', '700': '#0369a1', '800': '#075985', '900': '#0c4a6e' },
        'secondary': { '500': '#f59e0b', '600': '#d97706' },
        'neutral': { '50': '#f8fafc', '100': '#f1f5f9', '200': '#e2e8f0', '300': '#cbd5e1', '400': '#94a3b8', '500': '#64748b', '600': '#475569', '700': '#334155', '800': '#1e293b', '900': '#0f172a' },
        'feedback': { 'success': '#10b981', 'error': '#ef4444', 'warning': '#f97316' },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontSize: {
        'h1': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }]
      },
    },
  },
  plugins: [], // Nenhum plugin adicional por enquanto
}