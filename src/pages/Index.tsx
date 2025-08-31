import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: "Irishka82", message: "Готовимся к новому дню! 13 квот выполняем!", time: "10:30", type: "leader" },
    { id: 2, user: "Player_Alex", message: "Взял бамбук, выполняю сейчас", time: "10:32", type: "member" },
    { id: 3, user: "GamerMike", message: "Золотые листы готовы! 💰", time: "10:35", type: "member" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, {
        id: chatMessages.length + 1,
        user: "Вы",
        message: newMessage,
        time: new Date().toLocaleTimeString("ru-RU", { hour: '2-digit', minute: '2-digit' }),
        type: "member"
      }]);
      setNewMessage("");
    }
  };

  const teamMembers = [
    { name: "Irishka82", level: 95, hearts: 2847, tasks: 13, position: 1, status: "Капитан" },
    { name: "Player_Alex", level: 82, hearts: 2156, tasks: 11, position: 2, status: "Активный" },
    { name: "GamerMike", level: 78, hearts: 1923, tasks: 12, position: 3, status: "Активный" },
    { name: "StarPlayer", level: 74, hearts: 1845, tasks: 10, position: 4, status: "Новичок" },
    { name: "CruiseKing", level: 71, hearts: 1632, tasks: 9, position: 5, status: "Активный" }
  ];

  const achievements = [
    { title: "Мастер Квот", description: "Выполнил 13 заданий за день", icon: "Trophy", unlocked: true, rarity: "legendary" },
    { title: "Быстрый Сбор", description: "Мгновенное выполнение заданий", icon: "Zap", unlocked: true, rarity: "epic" },
    { title: "Командный Игрок", description: "Помог 5 участникам команды", icon: "Users", unlocked: false, rarity: "rare" },
    { title: "Золотодобытчик", description: "Собрал 1000 золотых листов", icon: "Coins", unlocked: true, rarity: "epic" },
    { title: "Железная Воля", description: "100 слитков железа собрано", icon: "Shield", unlocked: false, rarity: "common" },
    { title: "Морской Волк", description: "30 дней в круизе", icon: "Anchor", unlocked: true, rarity: "legendary" }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary": return "from-amber-400 to-yellow-600";
      case "epic": return "from-purple-400 to-indigo-600";
      case "rare": return "from-blue-400 to-cyan-600";
      default: return "from-gray-400 to-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-8 py-12">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in" style={{ fontFamily: 'Orbitron, monospace' }}>
            🚢 КРУИЗ IRISHKA82
          </h1>
          <p className="text-xl opacity-90 mb-6">Игровой портал команды • Цель: Космические высоты!</p>
          <div className="flex justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2">
              <Icon name="Users" size={16} className="mr-2" />
              5 Участников
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2">
              <Icon name="Target" size={16} className="mr-2" />
              13 Квот в день
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs defaultValue="rules" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="rules">Правила</TabsTrigger>
            <TabsTrigger value="leaderboard">Рейтинг</TabsTrigger>
            <TabsTrigger value="achievements">Достижения</TabsTrigger>
            <TabsTrigger value="chat">Чат</TabsTrigger>
          </TabsList>

          <TabsContent value="rules" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="BookOpen" size={24} className="text-orange-400" />
                  Правила игры в круиз Irishka82
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                  <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">1️⃣</span>
                        Ежедневное выполнение 13 квот
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">
                        Это обязательное условие, которое позволит нашей команде повысить свою продуктивность, 
                        увеличить количество сердец, начисляемых каждому участнику, и повысить шансы на достижение 
                        наивысшего уровня среди соревнующихся.
                      </p>
                      <div className="mt-4 flex gap-2">
                        <Badge className="bg-orange-500/20 text-orange-300">Обязательно</Badge>
                        <Badge className="bg-green-500/20 text-green-300">+Сердца</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">2️⃣</span>
                        Распределение задач
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Задачи делятся на шесть малых по количеству очков и шесть наибольших.
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-cyan-300">Быстрые задания:</p>
                        <div className="flex flex-wrap gap-1">
                          {["🎋 Бамбук", "🥕 Морковь", "🪶 Перья", "⛏️ Железная руда", "🔩 Железный слиток", "🏅 Золотые листы"].map(item => (
                            <Badge key={item} variant="outline" className="text-xs">{item}</Badge>
                          ))}
                        </div>
                        <p className="text-xs text-gray-400 mt-2">* Брать при условии мгновенного выполнения</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">3️⃣</span>
                        Обновление доски
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Доска будет обновляться каждые 15 минут.
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Clock" size={16} className="text-purple-400" />
                        <span className="text-sm">Интервал: 15 минут</span>
                      </div>
                      <p className="text-xs text-red-300">
                        ⚠️ Задачи, которые останутся без внимания в течение заданного времени, будут удалены. 
                        Негативные комментарии не принимаются.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="Trophy" size={24} className="text-yellow-400" />
                  Рейтинг участников команды
                </CardTitle>
                <CardDescription>Топ игроков по количеству сердец и выполненных заданий</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <div key={member.name} className={`flex items-center gap-4 p-4 rounded-lg border transition-all hover:scale-105 ${
                      index === 0 ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30' :
                      index === 1 ? 'bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-400/30' :
                      index === 2 ? 'bg-gradient-to-r from-amber-600/20 to-yellow-600/20 border-amber-600/30' :
                      'bg-slate-700/30 border-slate-600/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                          index === 0 ? 'bg-yellow-500 text-black' :
                          index === 1 ? 'bg-gray-400 text-black' :
                          index === 2 ? 'bg-amber-600 text-white' :
                          'bg-slate-600 text-white'
                        }`}>
                          {index === 0 ? '👑' : member.position}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">{member.name}</h3>
                            <Badge variant={member.status === "Капитан" ? "destructive" : "secondary"} className="text-xs">
                              {member.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-400">Уровень {member.level}</p>
                        </div>
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-4 ml-4">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm">Сердца</span>
                            <span className="font-bold text-red-400">{member.hearts.toLocaleString()}</span>
                          </div>
                          <Progress value={(member.hearts / 3000) * 100} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm">Задачи</span>
                            <span className="font-bold text-green-400">{member.tasks}/13</span>
                          </div>
                          <Progress value={(member.tasks / 13) * 100} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="Award" size={24} className="text-purple-400" />
                  Достижения и награды
                </CardTitle>
                <CardDescription>Коллекция достижений команды Irishka82</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {achievements.map((achievement, index) => (
                    <Card 
                      key={index}
                      className={`transition-all duration-300 hover:scale-105 ${
                        achievement.unlocked 
                          ? `bg-gradient-to-br ${getRarityColor(achievement.rarity)}/20 border-2 border-opacity-50` 
                          : 'bg-slate-700/30 border-slate-600/30 opacity-60'
                      }`}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Icon 
                            name={achievement.icon as any} 
                            size={32} 
                            className={achievement.unlocked ? 'text-yellow-400' : 'text-gray-500'} 
                          />
                          <Badge 
                            variant={achievement.unlocked ? "secondary" : "outline"}
                            className={`text-xs ${achievement.unlocked ? `bg-gradient-to-r ${getRarityColor(achievement.rarity)} text-white` : ''}`}
                          >
                            {achievement.rarity}
                          </Badge>
                        </div>
                        <CardTitle className={`text-lg ${achievement.unlocked ? 'text-white' : 'text-gray-400'}`}>
                          {achievement.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className={`text-sm ${achievement.unlocked ? 'text-gray-300' : 'text-gray-500'}`}>
                          {achievement.description}
                        </p>
                        {achievement.unlocked && (
                          <div className="mt-3 flex items-center gap-1 text-green-400">
                            <Icon name="Check" size={14} />
                            <span className="text-xs">Разблокировано</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="MessageCircle" size={24} className="text-blue-400" />
                  Командный чат
                </CardTitle>
                <CardDescription>Общение участников команды в реальном времени</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 w-full rounded-md border border-slate-600 p-4 mb-4">
                  <div className="space-y-3">
                    {chatMessages.map((msg) => (
                      <div key={msg.id} className="flex gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          msg.type === 'leader' ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'
                        }`}>
                          {msg.user === 'Вы' ? 'Я' : msg.user.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-sm">{msg.user}</span>
                            {msg.type === 'leader' && (
                              <Badge variant="destructive" className="text-xs py-0 px-1">Капитан</Badge>
                            )}
                            <span className="text-xs text-gray-400">{msg.time}</span>
                          </div>
                          <p className="text-gray-300 text-sm">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Введите сообщение..."
                    className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <Button onClick={sendMessage} className="bg-blue-600 hover:bg-blue-700">
                    <Icon name="Send" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;