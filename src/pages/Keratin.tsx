import React from 'react';
import PageHero from '../components/PageHero';
import { Sparkles, Calendar } from 'lucide-react';

export default function Keratin() {
  return (
    <div>
      <PageHero 
        title="Keratinbehandling"
        description="Revolutionerande behandling för silkeslent hår"
        image="https://www.intaglio.com.au/wp-content/uploads/2022/08/keratin-hair-treatment.jpg"
      />
      
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Brazilian Keratin Treatment</h2>
            <p className="text-neutral-600 leading-relaxed">
              Upptäck kraften i vår Brazilian Keratin Treatment - en revolutionerande behandling 
              som ger dig silkeslent, friskt och hanterbart hår i upp till 6 månader. 
              Perfekt för dig som vill slippa friss och få ett naturligt slätt resultat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-464575644-1595615606.jpg?crop=0.787xw:1.00xh;0.107xw,0&amp;resize=320:*"
                alt="Keratin behandling resultat"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-light mb-4">Fördelar med behandlingen</h3>
              <ul className="space-y-3 text-neutral-600">
                <li>✨ Eliminerar friss och gör håret lätthanterligt</li>
                <li>✨ Minskar föntiden med upp till 70%</li>
                <li>✨ Ger glans och mjukhet</li>
                <li>✨ Reparerar skadat hår</li>
                <li>✨ Långvarigt resultat</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/priser" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-beige-500 text-white rounded-full hover:bg-beige-600 transition-colors duration-300">
              <Sparkles className="w-5 h-5" />
              Se våra priser
            </a>
            <a href="/#team-section" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-beige-500 text-beige-500 rounded-full hover:bg-beige-500 hover:text-white transition-all duration-300">
              <Calendar className="w-5 h-5" />
              Boka tid
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}