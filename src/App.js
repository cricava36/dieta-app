import React, { useState, useEffect } from "react";
import { dieta, ricette } from "./dietaData";

// Componente Lista Spesa Settimanale
function ListaSpesaSettimanale({ giorniSelezionati, onClose }) {
  const [ingredientiSpuntati, setIngredientiSpuntati] = useState({});
  
  const ingredientiTotali = {};
  giorniSelezionati.forEach(giornoNum => {
    const giornoData = dieta.find(g => g.giorno === giornoNum);
    if (giornoData) {
      Object.values(giornoData.pasti).forEach(pasto => {
        pasto.forEach(item => {
          if (item.ricetta && ricette[item.ricetta]) {
            ricette[item.ricetta].ingredienti.forEach(ing => {
              const nome = ing.nome;
              ingredientiTotali[nome] = ingredientiTotali[nome] || { ...ing, quantita: [] };
              if (ing.quantita) ingredientiTotali[nome].quantita.push(ing.quantita);
            });
          } else if (item.piatto && item.quantita) {
            const nome = item.piatto;
            ingredientiTotali[nome] = ingredientiTotali[nome] || { nome, quantita: [] };
            ingredientiTotali[nome].quantita.push(item.quantita);
          }
        });
      });
    }
  });

  const toggleIngrediente = (nome) => {
    setIngredientiSpuntati(prev => ({
      ...prev,
      [nome]: !prev[nome]
    }));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>🛒 Lista Spesa Settimanale</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="giorni-selezionati">
          <strong>Giorni: </strong>{giorniSelezionati.join(", ")}
        </div>
        <div className="spesa-lista">
          {Object.values(ingredientiTotali).map((ing, i) => (
            <div 
              key={i} 
              className={`spesa-item ${ingredientiSpuntati[ing.nome] ? 'spuntato' : ''}`}
              onClick={() => toggleIngrediente(ing.nome)}
            >
              <span className="checkbox">{ingredientiSpuntati[ing.nome] ? '✅' : '☐'}</span>
              <span className="nome">{ing.nome}</span>
              {ing.quantita.length > 0 && (
                <span className="quantita">({ing.quantita.join(", ")})</span>
              )}
            </div>
          ))}
        </div>
        <div className="modal-actions">
          <button onClick={() => window.print()}>🖨️ Stampa</button>
          <button onClick={onClose}>Chiudi</button>
        </div>
      </div>
    </div>
  );
}

// Componente Timer Cottura
function TimerCottura({ isOpen, onClose, ricettaNome }) {
  const [tempo, setTempo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [tempoIniziale, setTempoIniziale] = useState(10);

  useEffect(() => {
    let interval;
    if (isRunning && tempo > 0) {
      interval = setInterval(() => {
        setTempo(tempo => {
          if (tempo <= 1) {
            setIsRunning(false);
            // Notifica quando il timer finisce
            if (Notification.permission === 'granted') {
              new Notification('⏰ Timer Cottura', {
                body: `${ricettaNome} è pronto!`,
                icon: '/favicon.ico'
              });
            }
            return 0;
          }
          return tempo - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, tempo, ricettaNome]);

  const startTimer = () => {
    setTempo(tempoIniziale * 60);
    setIsRunning(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="timer-modal" onClick={e => e.stopPropagation()}>
        <h3>⏰ Timer Cottura</h3>
        <p>{ricettaNome}</p>
        <div className="timer-display">{formatTime(tempo)}</div>
        <div className="timer-controls">
          <input 
            type="number" 
            value={tempoIniziale} 
            onChange={(e) => setTempoIniziale(parseInt(e.target.value))}
            min="1" max="120"
            disabled={isRunning}
          />
          <span>minuti</span>
        </div>
        <div className="timer-buttons">
          <button onClick={startTimer} disabled={isRunning}>
            {isRunning ? 'In corso...' : 'Avvia'}
          </button>
          <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? '⏸️ Pausa' : '▶️ Riprendi'}
          </button>
          <button onClick={() => { setIsRunning(false); setTempo(0); }}>
            🛑 Stop
          </button>
        </div>
        <button className="close-btn" onClick={onClose}>Chiudi</button>
      </div>
    </div>
  );
}

// Componente Calendario
function CalendarioPianificazione({ pianificazione, setPianificazione }) {
  const [settimanaCorrente, setSettimanaCorrente] = useState(0);
  
  const giorni = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];
  
  const getGiornoSettimana = (indice) => {
    return settimanaCorrente * 7 + indice + 1;
  };

  const assegnaGiorno = (posizione, giornodieta) => {
    setPianificazione(prev => ({
      ...prev,
      [posizione]: giornodieta
    }));
  };

  return (
    <div className="calendario">
      <div className="calendario-header">
        <button onClick={() => setSettimanaCorrente(Math.max(0, settimanaCorrente - 1))}>
          ← Settimana Prec
        </button>
        <h3>📅 Pianificazione Settimana {settimanaCorrente + 1}</h3>
        <button onClick={() => setSettimanaCorrente(settimanaCorrente + 1)}>
          Settimana Succ →
        </button>
      </div>
      <div className="calendario-grid">
        {giorni.map((giorno, i) => {
          const posizione = getGiornoSettimana(i);
          const giornoAssegnato = pianificazione[posizione];
          return (
            <div key={i} className="calendario-giorno">
              <div className="giorno-nome">{giorno}</div>
              <div className="giorno-numero">{posizione}</div>
              <select 
                value={giornoAssegnato || ''} 
                onChange={(e) => assegnaGiorno(posizione, parseInt(e.target.value) || null)}
                className="giorno-select"
              >
                <option value="">Riposo</option>
                {dieta.map(d => (
                  <option key={d.giorno} value={d.giorno}>
                    Dieta Giorno {d.giorno}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ListaIngredienti({ pasti }) {
  const ingredienti = {};
  pasti.forEach(pasto => {
    pasto.forEach(item => {
      if (item.ricetta && ricette[item.ricetta]) {
        ricette[item.ricetta].ingredienti.forEach(ing => {
          const nome = ing.nome;
          ingredienti[nome] = ingredienti[nome] || { ...ing, quantita: [] };
          if (ing.quantita) ingredienti[nome].quantita.push(ing.quantita);
        });
      } else if (item.piatto && item.quantita) {
        const nome = item.piatto;
        ingredienti[nome] = ingredienti[nome] || { nome, quantita: [] };
        ingredienti[nome].quantita.push(item.quantita);
      }
    });
  });
  return (
    <ul>
      {Object.values(ingredienti).map((ing, i) => (
        <li key={i}>
          {ing.nome}
          {ing.quantita.length > 0 ? ` (${ing.quantita.join(", ")})` : ""}
        </li>
      ))}
    </ul>
  );
}

function getPastoIcon(pasto) {
  switch(pasto) {
    case 'colazione': return '☀️';
    case 'pranzo': return '🍽️';
    case 'cena': return '🌙';
    default: return '🍴';
  }
}

function getPastoTitle(pasto) {
  switch(pasto) {
    case 'colazione': return 'Colazione';
    case 'pranzo': return 'Pranzo';
    case 'cena': return 'Cena';
    default: return pasto.charAt(0).toUpperCase() + pasto.slice(1);
  }
}

function App() {
  const [giornoCorrente, setGiornoCorrente] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [showShoppingList, setShowShoppingList] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [showTimer, setShowTimer] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(10);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [weekPlanning, setWeekPlanning] = useState({});
  const [currentWeek, setCurrentWeek] = useState(0);
  const [remindersEnabled, setRemindersEnabled] = useState(false);
  const [showIngredientsAnalysis, setShowIngredientsAnalysis] = useState(false);

  // Funzione per convertire unità di misura
  const convertUnit = (ingredientName, quantity) => {
    const liquidi = ['latte', 'brodo', 'vino', 'acqua', 'olio', 'aceto'];
    const isLiquid = liquidi.some(liquid => ingredientName.toLowerCase().includes(liquid));
    
    if (isLiquid) {
      // Converti in litri
      if (quantity >= 1000) {
        return `${(quantity / 1000).toFixed(2)} Lt`;
      } else {
        return `${quantity.toFixed(0)} ml`;
      }
    } else {
      // Mantieni in grammi
      if (quantity >= 1000) {
        return `${(quantity / 1000).toFixed(2)} Kg`;
      } else {
        return `${quantity.toFixed(0)} g`;
      }
    }
  };

  // Funzione per analizzare ingredienti comuni vs giornalieri
  const analyzeIngredients = () => {
    const allIngredients = {};
    const ingredientDays = {};

    // Raccoglie tutti gli ingredienti da tutti i giorni
    dieta.forEach(dayData => {
      const dayNumber = dayData.giorno;
      
      Object.values(dayData.pasti).forEach(pasto => {
        pasto.forEach(item => {
          if (item.ricetta && ricette[item.ricetta]) {
            ricette[item.ricetta].ingredienti.forEach(ingrediente => {
              const nome = ingrediente.nome;
              const quantita = parseFloat(ingrediente.quantita.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
              
              if (!allIngredients[nome]) {
                allIngredients[nome] = 0;
                ingredientDays[nome] = new Set();
              }
              
              allIngredients[nome] += quantita;
              ingredientDays[nome].add(dayNumber);
            });
          } else if (item.piatto && item.quantita) {
            const nome = item.piatto;
            const quantita = parseFloat(item.quantita.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
            
            if (!allIngredients[nome]) {
              allIngredients[nome] = 0;
              ingredientDays[nome] = new Set();
            }
            
            allIngredients[nome] += quantita;
            ingredientDays[nome].add(dayNumber);
          }
        });
      });

      // Aggiungi olio se presente
      if (dayData.olio) {
        const quantita = parseFloat(dayData.olio.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
        if (!allIngredients['Olio extravergine di oliva']) {
          allIngredients['Olio extravergine di oliva'] = 0;
          ingredientDays['Olio extravergine di oliva'] = new Set();
        }
        allIngredients['Olio extravergine di oliva'] += quantita;
        ingredientDays['Olio extravergine di oliva'].add(dayNumber);
      }

      // Aggiungi parmigiano se presente
      if (dayData.parmigiano) {
        const quantita = parseFloat(dayData.parmigiano.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
        if (!allIngredients['Parmigiano']) {
          allIngredients['Parmigiano'] = 0;
          ingredientDays['Parmigiano'] = new Set();
        }
        allIngredients['Parmigiano'] += quantita;
        ingredientDays['Parmigiano'].add(dayNumber);
      }
    });

    // Separa ingredienti comuni (presenti in TUTTI i 10 giorni) da quelli specifici
    const commonIngredients = {};
    const specificIngredients = {};

    Object.keys(allIngredients).forEach(nome => {
      const daysCount = ingredientDays[nome].size;
      const totalQuantity = allIngredients[nome];
      
      if (daysCount === 10) { // Presente in TUTTI i 10 giorni = comune
        commonIngredients[nome] = {
          quantita: totalQuantity,
          quantitaFormattata: convertUnit(nome, totalQuantity),
          giorni: Array.from(ingredientDays[nome]).sort((a, b) => a - b)
        };
      } else {
        specificIngredients[nome] = {
          quantita: totalQuantity,
          quantitaFormattata: convertUnit(nome, totalQuantity),
          giorni: Array.from(ingredientDays[nome]).sort((a, b) => a - b)
        };
      }
    });

    return { commonIngredients, specificIngredients, allIngredients };
  };

  // Funzione per ottenere ingredienti specifici di un giorno (escludendo quelli comuni)
  const getDailySpecificIngredients = (dayNumber) => {
    const { commonIngredients } = analyzeIngredients();
    const dayData = dieta.find(g => g.giorno === dayNumber);
    const dailySpecific = {};

    if (dayData) {
      Object.values(dayData.pasti).forEach(pasto => {
        pasto.forEach(item => {
          if (item.ricetta && ricette[item.ricetta]) {
            ricette[item.ricetta].ingredienti.forEach(ingrediente => {
              const nome = ingrediente.nome;
              
              // Solo se NON è un ingrediente comune
              if (!commonIngredients[nome]) {
                if (!dailySpecific[nome]) {
                  dailySpecific[nome] = 0;
                }
                const quantita = parseFloat(ingrediente.quantita.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
                dailySpecific[nome] += quantita;
              }
            });
          } else if (item.piatto && item.quantita) {
            const nome = item.piatto;
            
            // Solo se NON è un ingrediente comune
            if (!commonIngredients[nome]) {
              if (!dailySpecific[nome]) {
                dailySpecific[nome] = 0;
              }
              const quantita = parseFloat(item.quantita.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
              dailySpecific[nome] += quantita;
            }
          }
        });
      });

      // Controlla olio e parmigiano se non sono comuni
      if (dayData.olio && !commonIngredients['Olio extravergine di oliva']) {
        const quantita = parseFloat(dayData.olio.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
        dailySpecific['Olio extravergine di oliva'] = (dailySpecific['Olio extravergine di oliva'] || 0) + quantita;
      }

      if (dayData.parmigiano && !commonIngredients['Parmigiano']) {
        const quantita = parseFloat(dayData.parmigiano.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
        dailySpecific['Parmigiano'] = (dailySpecific['Parmigiano'] || 0) + quantita;
      }
    }

    // Converti le quantità con unità appropriate
    Object.keys(dailySpecific).forEach(nome => {
      const quantita = dailySpecific[nome];
      dailySpecific[nome] = {
        quantita: quantita,
        quantitaFormattata: convertUnit(nome, quantita)
      };
    });

    return dailySpecific;
  };

  // Richiedi permessi notifiche
  useEffect(() => {
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  // Promemoria pasti
  useEffect(() => {
    if (!remindersEnabled) return;
    
    const orariPasti = [
      { ora: 8, minuto: 0, pasto: 'colazione' },
      { ora: 13, minuto: 0, pasto: 'pranzo' },
      { ora: 20, minuto: 0, pasto: 'cena' }
    ];

    const checkPromemoria = () => {
      const ora = new Date();
      orariPasti.forEach(({ ora: h, minuto: m, pasto }) => {
        if (ora.getHours() === h && ora.getMinutes() === m && ora.getSeconds() === 0) {
          if (Notification.permission === 'granted') {
            new Notification(`🍽️ Promemoria ${pasto}`, {
              body: `È ora di preparare la ${pasto}!`,
              icon: '/favicon.ico'
            });
          }
        }
      });
    };

    const interval = setInterval(checkPromemoria, 1000);
    return () => clearInterval(interval);
  }, [remindersEnabled]);

  const giornoData = weekPlanning[giornoCorrente] 
    ? dieta.find(g => g.giorno === weekPlanning[giornoCorrente])
    : dieta.find(g => g.giorno === giornoCorrente);

  const apriTimer = (ricettaNome) => {
    setShowTimer(true);
    setTimerMinutes(10);
  };

  const toggleGiornoSpesa = (giornoNum) => {
    setSelectedDays(prev => 
      prev.includes(giornoNum) 
        ? prev.filter(g => g !== giornoNum)
        : [...prev, giornoNum].sort((a, b) => a - b)
    );
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header-controls">
        <h1>🥗 Dieta Giornaliera</h1>
        <div className="controls">
          <button 
            className="mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button 
            className="calendar-btn"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            📅 Pianifica
          </button>
          <button 
            className="spesa-btn"
            onClick={() => setShowShoppingList(true)}
          >
            🛒 Lista Spesa
          </button>
          <button 
            className="promemoria-btn"
            onClick={() => setRemindersEnabled(!remindersEnabled)}
          >
            {remindersEnabled ? '🔔' : '🔕'}
          </button>
        </div>
      </div>

      {showCalendar && (
        <CalendarioPianificazione 
          pianificazione={weekPlanning}
          setPianificazione={setWeekPlanning}
        />
      )}

      <div className="giorni-selector">
        {dieta.map(g => (
          <button
            key={g.giorno}
            className={giornoCorrente === g.giorno ? "selected" : ""}
            onClick={() => setGiornoCorrente(g.giorno)}
          >
            Giorno {g.giorno}
          </button>
        ))}
      </div>

      <div className="spesa-selector">
        <h4>Seleziona giorni per lista spesa:</h4>
        <div className="giorni-spesa">
          {dieta.map(g => (
            <label key={g.giorno} className="giorno-checkbox">
              <input 
                type="checkbox"
                checked={selectedDays.includes(g.giorno)}
                onChange={() => toggleGiornoSpesa(g.giorno)}
              />
              Giorno {g.giorno}
            </label>
          ))}
        </div>
      </div>

      {giornoData && (
        <div className="giorno-info">
          <h2>
            Giorno {giornoCorrente}
            {weekPlanning[giornoCorrente] && weekPlanning[giornoCorrente] !== giornoCorrente && (
              <span className="pianificato"> (Dieta Giorno {weekPlanning[giornoCorrente]})</span>
            )}
          </h2>
          <div className="pasti">
            {Object.entries(giornoData.pasti).map(([pasto, lista]) => (
              <div key={pasto} className="pasto">
                <h3>
                  <span style={{fontSize: '1.5rem'}}>{getPastoIcon(pasto)}</span>
                  {getPastoTitle(pasto)}
                </h3>
                <ul>
                  {lista.map((item, i) => (
                    <li key={i}>
                      <b>{item.piatto}</b>
                      {item.quantita ? ` (${item.quantita})` : ""}
                      {item.ricetta && ricette[item.ricetta] && (
                        <details>
                          <summary>📖 Ricetta</summary>
                          <div>
                            <div className="ricetta-header">
                              <b>🥘 Ingredienti:</b>
                              <button 
                                className="timer-btn"
                                onClick={() => apriTimer(item.piatto)}
                              >
                                ⏰ Timer
                              </button>
                            </div>
                            <ul>
                              {ricette[item.ricetta].ingredienti.map((ing, idx) => (
                                <li key={idx}>
                                  {ing.nome}{ing.quantita ? ` (${ing.quantita})` : ""}
                                </li>
                              ))}
                            </ul>
                            <b>👨‍🍳 Preparazione:</b>
                            <div style={{marginTop: '8px', lineHeight: '1.6'}}>{ricette[item.ricetta].preparazione}</div>
                          </div>
                        </details>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="info-extra">
            {giornoData.olio && (
              <div>
                <span style={{marginRight: '8px'}}>🫒</span>
                <b>Olio:</b> {giornoData.olio}
              </div>
            )}
            {giornoData.parmigiano && (
              <div>
                <span style={{marginRight: '8px'}}>🧀</span>
                <b>Parmigiano:</b> {giornoData.parmigiano}
              </div>
            )}
          </div>
          <div className="spesa">
            <h3>Lista ingredienti del giorno</h3>
            <ListaIngredienti pasti={Object.values(giornoData.pasti)} />
          </div>
        </div>
      )}

      {showShoppingList && (
        <ListaSpesaSettimanale 
          giorniSelezionati={selectedDays}
          onClose={() => setShowShoppingList(false)}
        />
      )}

      {showTimer && (
        <TimerCottura 
          isOpen={showTimer}
          onClose={() => setShowTimer(false)}
          ricettaNome={'Timer'}
        />
      )}

      {/* Modal Analisi Ingredienti */}
      {showIngredientsAnalysis && (
        <div className="modal-overlay" onClick={() => setShowIngredientsAnalysis(false)}>
          <div className="modal-content ingredients-analysis" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>📊 Analisi Intelligente Ingredienti</h2>
              <button onClick={() => setShowIngredientsAnalysis(false)}>✕</button>
            </div>
            
            <div className="analysis-content">
              {(() => {
                const { commonIngredients, specificIngredients } = analyzeIngredients();
                const todayIngredients = getDailySpecificIngredients(giornoCorrente);
                
                return (
                  <>
                    {/* Ingredienti Comuni Settimanali */}
                    <div className="analysis-section">
                      <h3>🛒 Spesa Unica (Ingredienti Comuni a TUTTI i 10 giorni)</h3>
                      <p className="section-description">
                        Questi ingredienti servono OGNI giorno della dieta. Comprali una volta sola per tutta la settimana:
                      </p>
                      <div className="ingredients-grid">
                        {Object.keys(commonIngredients).length > 0 ? (
                          Object.entries(commonIngredients).map(([nome, data]) => (
                            <div key={nome} className="ingredient-card common">
                              <span className="ingredient-name">{nome}</span>
                              <span className="ingredient-quantity">
                                {data.quantitaFormattata}
                              </span>
                              <span className="ingredient-days">
                                Presente in tutti i giorni: {data.giorni.join(', ')}
                              </span>
                            </div>
                          ))
                        ) : (
                          <p className="no-ingredients">Nessun ingrediente comune a tutti i giorni</p>
                        )}
                      </div>
                    </div>

                    {/* Ingredienti Giornalieri di Oggi */}
                    <div className="analysis-section">
                      <h3>🥗 Spesa di Oggi (Giorno {giornoCorrente}) - Solo Ingredienti Specifici</h3>
                      <p className="section-description">
                        Ingredienti che servono SOLO per le ricette di oggi (esclusi quelli comuni):
                      </p>
                      <div className="ingredients-grid">
                        {Object.keys(todayIngredients).length > 0 ? (
                          Object.entries(todayIngredients).map(([nome, data]) => (
                            <div key={nome} className="ingredient-card daily">
                              <span className="ingredient-name">{nome}</span>
                              <span className="ingredient-quantity">
                                {data.quantitaFormattata}
                              </span>
                            </div>
                          ))
                        ) : (
                          <p className="no-ingredients">
                            Oggi usi solo ingredienti comuni! Non serve comprare nulla di specifico. 🎉
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Riepilogo Ingredienti Variabili */}
                    <div className="analysis-section">
                      <h3>📋 Ingredienti Occasionali (Per Giorni Specifici)</h3>
                      <p className="section-description">
                        Ingredienti che NON servono tutti i giorni, ma solo per alcuni giorni specifici:
                      </p>
                      <div className="ingredients-grid">
                        {Object.entries(specificIngredients).map(([nome, data]) => (
                          <div key={nome} className="ingredient-card variable">
                            <span className="ingredient-name">{nome}</span>
                            <span className="ingredient-quantity">
                              {data.quantitaFormattata}
                            </span>
                            <span className="ingredient-days">
                              Solo nei giorni: {data.giorni.join(', ')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      <footer>
        <small>✨ App dieta by Cascade AI ✨</small>
      </footer>
    </div>
  );
}

export default App;
