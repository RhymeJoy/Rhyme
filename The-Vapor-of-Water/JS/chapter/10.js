const container = document.querySelector('.container');
const title = document.querySelector('.title');

    const paragraphs = [
        "<div class='preword'>這大概會是我第一次<br>也是最後一次的偷渡了！</div>",

        "還好我們的帶的行李並不多，我們把全部都塞到夢瑄在阿拉斯加買的大行李箱裡。",
        "我低頭看著那只塞得滿滿的大行李箱，忍不住嘆了口氣：“夢瑄，你到底是怎麼預料到我們會需要這麼大的箱子的？”",
        "夢瑄聳聳肩，一臉得意地笑道：“直覺吧！而且，說真的，你們幾個現在這樣，總不能自己拉行李吧？”她用下巴示意我們的蹄子。",
        "我無語地看著她，最終還是選擇接受現實，好吧，至少我們不用擔心行李會散落一地，不知道怎麼拿了！",
        "五月的這個時候，今天溫哥華的日落時間是晚上8點51分，我們在機上整理完東西後，已經花了我們半個鐘頭，當然也包括心理準備！",
        "“好吧，看來我們得抓緊時間行動了。”還好在剛剛我讓手機已經充飽電，不用擔心接下來沒電的風險。時間已經來到8點40分，距離日落只剩下11分鐘。剛好很順利可以利用黑夜的掩護行動。",
        "我走到艙門前，我動了動耳朵聽到門外有腳步聲靠近，一看才發現是夢瑄的朋友正走上來要通知我們。“快點，趁現在走吧！附近的地勤人員都不在，你們有十分鐘，十分鐘後加油機會過來，屆時想走就難了。”",
        "聽到這話，我不禁心頭一緊，立刻轉頭對欣韻和雷飛說：“聽到了吧？我們只有十分鐘，趁現在趕快撤！而夢瑄我要你走正規通道入境，這樣之後被警察臨檢什麼的，比較不會起疑。還有攜帶你的隨身背包就好，這兩大行李箱我們會想辦法。",
        "最後最重要的，整個溫哥華國際機場被弗雷澤河包圍，要離開機場勢必得過河。所以暫訂計畫如下，我們下機後，趁夜色掩護，慢慢向西南角移動，那位置在機場和對岸中間有個淺灘，溪流深度也較淺，比較好橫渡。夢瑄我要你想辦法到對岸的西堤漫步小道和我們會合。”我向大家補充道。",
        "“以上，最後有什麼問題嗎？沒有的話夢瑄你得先離開了！”我最後提問，得確認大家都沒問題。",
        "“好的，你說的算，長官！”夢瑄調皮地回應，還特意舉起右手向我敬了個禮。",
        "隨後就立刻背著自己的隨身包往外走，她的步伐相當輕盈而迅速，沒過多久，便消失在航廈大樓的門後。",
        "“為什麼不把所有的行李都交給她拿呢？”雷飛疑惑地問道。",
        "我無奈地翻了個白眼：“拜託，她雖然動作快，但我們的行李也不少，全部讓她一個人扛著，未免太過分了吧？更何況，海關看到她一個人沒託運，卻帶著這麼多行李，難道不會起疑嗎？你是想讓她被帶進小黑屋特別關照是不是？”",
        "“好了，時間不多了！”我語氣嚴肅地向他們倆指示，“我會負責這個薰衣草紫的行李箱，那個天藍色的，你們自己想辦法解決。”",
        "還好夢瑄在離開前特地把行李箱的桿子拉了出來，不然我又得浪費時間搗騰這玩意兒了！我咬住桿子，試圖拖動行李箱，但步伐依舊顯得笨拙且不穩。心裡忍不住吐槽：<span style='color: #ffffff00'>馬的，</span>才剛學會怎麼往前走，現在就要我倒退走是怎樣...",
        "勉強控制住身體的平衡，我一邊小心翼翼地往後挪動，一邊緊盯著艙門口，生怕一個不穩就直接摔個四腿朝天。當我終於來到艙門邊時，停下動作，深吸一口氣，然後伸長脖子將頭探出，仔細掃視周圍，確認附近是否有地勤人員在遊蕩。",
        "不行，這樣用嘴叼著行李倒著走實在太沒效率了！我皺起眉頭，心裡暗自焦急。隨即，我轉頭看向自己那對新生的翅膀，雖然還未完全長成成年飛馬的尺寸，但我能感覺到它們已經準備好了！",
        "<strong>快想，夢裡的我是怎麼飛的...</strong>",
        "我閉上眼，努力回憶起夢中的感覺。翅膀不是單純拍動就能讓我升空的，還有節奏、力度，以及空氣流動的感知...對了，還有身體的配合！我抿了抿嘴，開始試著微微展翅，感受空氣流過羽翼的觸感。雖然不確定能不能馬上成功，但現在，正是我實踐的時候！",
        "睜開眼後，我毫不猶豫地張開翅膀，開始快速拍動，心裡暗自鼓勵自己——只要成功飛行，就能用抱的，進而輕鬆擺脫這該死的行李搬運問題！為了更快起飛，我還特意小跳了一下，試圖讓身體獲得額外的升力離開地面。",
        "<strong>砰！</strong>",
        "然而，現實給了我當頭棒喝——我重重地摔在機艙地板上，四肢狼狽地攤開，行李箱的桿子也從懷裡脫落，發出清脆的金屬撞擊聲。翅膀還微微顫抖著，心裡的自信瞬間碎成了一地。",
        "“嘶——”我倒吸一口冷氣，感受著來自全身的微痛，心裡忍不住罵道：<span style='color: #ffffff00'>靠杯，</span>夢裡明明很簡單啊！",
        "我爬起身，再次確認艙門離地的高度——大約一樓高。不如試試用滑翔的方式跳下去吧！就算失敗，這個高度應該還在我能應對的範圍內。對吧！？",
        "我深吸了一口氣，張開翅膀，小心翼翼地調整角度。雖然還不太確定該怎麼正確運用這對新生的翅膀，但至少滑翔應該比直接起飛容易些吧？",
        "我將行李放在艙門前，往後退了幾步，以確保有足夠的助跑距離。深吸一口氣後，我猛地向前衝去，在踏出艙門的瞬間奮力躍起，緊緊抱住行李箱，隨即張開翅膀，用力撐開羽翼，試圖在下降的過程中減緩衝擊...",
        "一開始，我還是有些害怕，心跳加速得厲害，不自覺地將眼睛緊閉，等待著身體重重落地、疼痛襲來的那一刻。",
        "然而，疼痛並沒有如預期般襲來，取而代之的是一陣短暫的失重感。我感覺到風從耳邊呼嘯而過，翅膀似乎真的發揮了一些作用，讓我的下降變得比想像中平穩許多。",
        "我小心翼翼地睜開一隻眼睛，發現自己並沒有直接摔在地上，而是成功地滑翔了一小段距離。雖然最後仍是笨拙地跌坐在地，但比起完全自由落體，這已經算是不小的成功了。",
        "我努力讓自己激動的心情冷靜下來，然後迅速環顧四周，確認附近是否有地勤人員靠近。還好，四周依舊空蕩蕩的，沒有任何人注意到我這個“奇特生物”的降落方式。",
        "“呼，這就是飛翔的感覺嗎？...”我低聲喃喃道，心中仍留有餘悸，但更多的是興奮與震撼。“至少，目前還沒搞砸。”然後我伸出蹄子拍了拍行李箱，確認它是否安然無恙。",
        "我降落在一台裝滿行李的拖板車上，身下柔軟的行李成了意外的緩衝，讓我免於再次和地面來個親密接觸。",
        "隨後，我望向欣韻和雷飛，發現他們已經想辦法把行李順利地搬下登機梯，並正朝我這邊走來，動作比我預想的還要快速。",
        "欣韻笑著看向我調侃道：“也許下次能來個更華麗的降落方式！”",
        "我從拖板車上翻了下去，然後聳了聳肩，無奈地回道：“哈，能安全落地就不錯了，別太苛求嘛。”",
        "雷飛則是抬起蹄子拍拍我的背，嘴角揚起一抹笑意：“不過話說回來，你的確進步神速啊，剛才那一下，說不定再練個幾次就真的能飛起來了。”",
        "“少來，你們倆趕快把行李拿好，別讓地勤發現了。”我提醒著他們，順手把自己的行李從拖板車上拽了下來。",
        "欣韻瞥了眼四周，點點頭道：“嗯，先離開這裡再說，免得被發現。”",
        "在我環顧四周，確保沒有任何地勤人員後，我壓低聲音喊道：“你們等一下，我有個主意！”",
        "我隨後走向拖板車的前方，輕輕一躍跳上行李拖車的駕駛座查看，然後轉頭對兩位露出得意的笑容：“Yes，看來有人忘了拔鑰匙囉！”",
        "雷飛挑了挑眉，半信半疑地問道：“你確定這東西我們能開？更何況...你會開這車嗎？”",
        "欣韻則是一臉興奮地湊過來，看了看駕駛座上的控制桿，輕輕嘖了一聲：“說不定這玩意兒比開車還簡單。”",
        "我拍了拍方向盤，嘴角揚起一抹自信的笑容：“簡單不簡單，試了才知道。總比我們拖著這兩大行李，用四條腿慢慢走來得快吧？”",
        "雷飛嘆了口氣：“行吧，但我可不想因為偷開行李拖車被機場保安追著跑。”",
        "“所以我們要快點。”我抓住方向盤，伸出蹄子去試探性地轉動鑰匙，發動引擎。伴隨著微微的震動聲，拖車果然啟動了。我看了看眼前的兩匹小馬，揚了揚眉：“上車吧，趁現在還沒人發現。來快把行李放這。”",
        "就在我用後腿要踩向加油踏板的同時，突然聽到一聲嚴厲的制止聲：“嘿，立即停下！”",
        "我猛地一僵，迅速扭頭看去，發現不知何時，一位機場的保安已經出現在了我們身後的建築物門前，眉頭緊鎖，遠遠地用眼神銳利地盯著我們。他的身影在昏暗的燈光下顯得格外高大，神情警覺，顯然察覺到了異常。",
        "但我猜應該是有夜色掩護，而且有一段距離，視線不佳才沒認得出是非人的奇特生物在駕駛座上。儘管如此，保安的警覺心情並未鬆懈，雙手放在腰間，看起來隨時準備應對突發狀況。",
        "我急忙向雷飛和欣韻做出不要動的蹄勢，心中暗自計算著時間和距離，試圖抓住一絲機會。而此刻，保安似乎並未完全確定我們的身份，只是保持著警戒，顯得有些猶豫不決。",
        "“我們得想辦法解決這個問題，越早越好。”我心中默念，眼神微微閃動。",
        "保安再次對我們警告：“喂！那邊的——你們在幹什麼？”保安朝我們邁出一步，聲音比剛才更加嚴厲：“你們是這裡的工作人員嗎？現在正值換班期間，按理說這裡不應該有人才對。”",
        "雷飛輕聲低語：“完了，他開始懷疑我們了。”",
        "“冷靜。”我壓低聲音回應，同時飛快思索著應對方法。我們現在最大的優勢就是距離與光線不足，保安還沒看清楚我們的模樣，這是唯一的轉機。",
        "我深吸一口氣，強迫自己鎮定，試圖以最自然的語氣用英文回應：“呃...是的，我們只是來檢查一下行李拖車。剛剛有人忘了拔鑰匙，所以我們過來拿，以免被人隨便開走。”",
        "保安似乎還在權衡我們的說詞。他皺了皺眉，語氣依舊帶著懷疑著詢問：“是嗎？那你們是哪個部門的？我怎麼從來沒見過你們？還有，請你們熄火一下。",
        "我心裡一緊，知道這時候千萬不能露餡，於是盡量用輕鬆的語氣回道：“我們是臨時調派過來的，今晚這邊人手緊缺，所以被叫來幫忙。”",
        "保安看起來還是不太相信，目光落在我們身旁的行李上，眼神更加銳利，並追問：“如果是這樣的話，你們的工作證呢？能出示一下嗎？還有，這是最後一次警告，我要求你們熄火。”",
        "我緊盯著後照鏡，眼睜睜看著他再次邁步朝我們走來，心跳不禁加快。就在他繼續靠近時，我低聲地罵了出來。“<span style='color: #ffffff00'>幹，</span>還真是不肯善罷甘休啊...”",
        "就在他逐漸看清車上的我們後，他的腳步驟然一頓，臉上的疑惑瞬間加深，眼神裡透出一絲驚愕，脫口而出：“他馬的，你們是什麼...”",
        "就在他話還沒說完的瞬間，我猛地將油門踩到底，拖車發出一聲突兀的轟鳴，車輪猛然轉動，揚起一陣灰塵。我緊緊咬住牙關，感受著車身的顛簸，心跳隨著速度的提升而加快。",
        "“抓穩！”我大喊，耳邊是風聲與雷飛和欣韻的驚呼聲。我不敢回頭看那名保安的反應，但能想像到他此刻震驚的表情，或許還伴隨著手忙腳亂地掏出對講機通報的動作。",
        "沒時間管那麼多了，我只能全神貫注地控制這台行李拖車，朝著我們計劃的方向疾馳而去。",
        "然而，保安可沒閒著，他大聲喝道：“停下！”見我們毫無停下的意思，他立刻轉身跳上另一輛拖車，發動引擎，開始追了上來。",
        "引擎的轟鳴聲在夜色中格外清晰，我從後照鏡中看到保安已經開動拖車，車頭燈照亮了我們的背影，距離正在迅速縮短。",
        "“糟了，他追上來了！”雷飛焦急地喊道，回頭張望著。",
        "“廢話，我也看到了！”我咬緊牙關，努力控制方向盤，但這種行李拖車速度並不快，根本甩不開後方的追兵。",
        "“怎麼辦？我可不想被抓後，送進51區當小白鼠，到時候就麻煩了！”欣韻緊張地說。",
        "我心念急轉，環顧四周，尋找任何能擺脫對方的方法。突然，一個念頭閃過我的腦海——我們後面還拖著成吨的行李！那不僅僅只是負重，也可以成為我們的投擲武器。",
        "我迅速調整了一下自己在駕駛的位置，讓自己更靠近向心力的一側，心裡盤算著如何利用這些行李來對付追兵。隨著我快速瞄了一眼後視鏡，我看到那輛追趕的拖車仍然緊緊跟著，但這次，我決定不再直接逃避，而是用點巧妙的策略來擾亂他。",
        "“聽著，雷飛，欣韻！準備好了嗎？”我冷靜地問道，語氣帶著一絲決心。",
        "“窩窩窩，你什麼意思？”雷飛疑惑地問。",
        "我微微一笑，回應道：“就照我說的做，抓緊了。”",
        "隨後，我猛踩油門，帶著那堆行李拖車快速前進，並在一個轉彎處突然將行李拖車的重心向一側傾斜，製造出一個假象，讓後方的保安錯誤地判斷出我們可能會失控。",
        "行李箱突然一側傾斜，發出一聲響亮的撞擊聲，隨著整個車輛劇烈搖晃，後方的保安顯然被嚇了一跳，他慌亂地打開警報燈，試圖加速超過我們。然而，他顯然低估了我的計算，我迅速調整方向，讓行李箱在接下來的一個彎道更為不穩定地擺動，將整個拖車晃來晃去。",
        "“他應該會以為我們失控了，這下我們的機會來了。”我心裡暗自計算著他會如何反應。",
        "果然，保安在經歷一番慌亂後，遲疑了一下，沒敢追得太近。他明顯被我們的奇怪駕駛方式嚇到，這也讓我有了片刻的喘息時間。",
        "“我們這樣能拖延多久？”欣韻問道，眼神中帶著一絲緊張。",
        "“不久。”我回答，語氣冷靜，雖然內心有些焦慮，“但我們必須馬上找到一個讓我們安全脫身的方法。再這樣下去，我們的處境只會越來越糟。我要你們準備好，拿行李丟他。”",
        "欣韻顯然有些迷茫，愣了一下，“你，說丟行李？這不是開玩笑吧？”",
        "“丟行李？”雷飛則有些興奮地挑了挑眉，“我倒是挺想試試看這種方式，感覺像在電影裡！”",
        "“你們丟就對了。”我繼續保持著冷靜的語氣，眼睛專注於前方的道路，內心計算著每一個可能的行動。“我們必須想辦法逼停他，讓他無法再繼續追。”",
        "“明白。”雷飛的語氣帶著一絲期待，而欣韻則無奈地點了點頭，雖然還有些不確定，但我能感覺到她的緊張情緒已經被我的決心帶動。",
        "這時，後方保安又再次接近，又對我們喊道：“快停車！我已經呼叫支援了，你們是跑不遠的。”",
        "我不容猶豫，立刻向後方的兩位命令道：“就是現在，快丟！”",
        "我能聽到兩位迅速爬到後方的動作聲。欣韻和雷飛聽見指令後，立刻將無數行李丟出，重重地砸向後方的追車。即便沒有直接砸中，也能迫使保安閃避或減速。就在這時，其中一個行李在空中划出一道弧線，就像自帶瞄準一樣，重重地撞擊在保安的臉上。",
        "我急忙看向後視鏡，保安似乎暈過去。只見保安失控地打滑，拖車在輾過持續扔出的行李後翻覆。看著他被甩到那堆之前丟出的行李箱上緩衝，我心中湧上一股複雜的情緒。現在只能希望他沒事，但此時我們也不能停下來，只能繼續前行。",
        "沒了保安的追捕，我終於鬆了口氣，心中的其中一顆石頭終於放下。現在，我們只能繼續朝西南角的圍籬前進。",
        "靠近圍籬後，我立刻熄火，讓剩餘的動能帶著拖車慢慢滑行過去。當我們抵達時，我輕輕踩下煞車，將拖車穩穩停住，確保不會再有任何意外。",
        "我望向圍籬，感覺不高，當然是對人類來說。然而，對我們小馬而言，這座圍籬幾乎就像是一道不可逾越的高牆。",
        "我再次注視著展開的雙翅，心中暗自決定再試一次。畢竟，剛才的滑翔經驗給了我信心，這次應該不會那麼困難了。",
        "我深吸一口氣，雙翅微微顫動，然後全身集中精力。回想起之前的經驗，我知道只要掌握好節奏，這次應該能夠順利飛越那座圍籬。我蹲下，迅速借力起跳，雙翅猛然拍動，身體瞬間升空。",
        "隨著氣流在翅膀下方撲動，我感覺到自己穩定了下來，飛行的感覺愈加熟悉。我注意到我的四隻蹄子沒有再次與地面接觸，雖然可能只有幾公分高，但我成功懸停在空中了！",
        "儘管對於我第一次來說，首次升空有些困難，但我還是盡力維持穩定。隨著身體慢慢適應，我加快了拍翅的速度，讓自己開始些微往上升。當我開始習慣了這樣的飛行節奏，我調整了方向，飛到紫色行李箱上方。",
        "我用蹄子將它抱起來，隨著行李的負重加上，我不得不加大拍翅的力道，才能保持穩定飛行，這樣的挑戰讓我不得不更加集中精力。但即使如此，我還是能感覺到自己對飛行的掌控越來越好。",
        "隨著我抱住行李箱，我的小心翼翼地保持平衡，雖然負重讓我更加費力，但飛行的感覺越來越熟悉。我開始將目光集中在前方的圍籬上，調整上升角度，準備飛越圍籬。",
        "一邊拍動翅膀，一邊注意到行李箱的重量確實讓我更加吃力。但漸漸地，我越過了圍籬，然後試圖以平穩的速度降落。當接近地面時，我微微調整了姿勢，讓自己輕盈地降落在一塊空地上，並迅速將行李箱放到旁邊。",
        "我心裡想著：終於成功了！雖然仍有些喘息，但那一刻，我心中湧上了成就感。",
        "看著我成功地越過來，欣韻也躍躍欲試，但她的挑戰讓我忍不住笑了出來，她的翅膀還在努力振動，試圖維持平衡，但她的失敗讓她摔了下來，幸運的是，她並沒有像我之前那樣親吻地面。她慌亂地站起來，擦了擦臉，對我露出了尷尬卻又帶著堅持的笑容。",
        "“唉，還得再練習，至少我沒臉著陸對吧？”她一邊嘆氣一邊看著我。",
        "我笑了笑，拍拍她的肩膀：“別灰心，練習就好！我剛剛也摔了不少次。飛起來比走路有挑戰，但失敗為成功之母，我相信妳會越來越好的！”",
        "安慰完欣韻後，我立刻又飛回到對面，這次我幫他們把藍色的行李箱也搬了過來。不得不說，我越來越上蹄了！那種掌控飛行的感覺越來越熟悉，行李箱也輕鬆地被我夾在蹄下。把兩個行李箱擺放好後，我回頭看向兩位，腦海中快速思考要怎麼做，才能把讓他們弄過來。",
        "我站在原地，環顧四周，然後向欣韻和雷飛招了招蹄子。既然飛行對我來說已經不再是問題，那麼也許可以幫助他們減少一些麻煩。",
        "“來吧，接下來我試試看帶著你們過來。”我自信地說道，雖然這可能有些挑戰，但我總得試試。",
        "欣韻望了望我，又看了看眼前的圍籬，猶豫了一下，最終點了點頭。“好吧！你要小心一點喔！”",
        "“雷飛，我先試試把你帶過來，因為你雌駒的身型相較雄駒來說更輕盈，我先拿你試下蹄。等會我再來接欣韻。”我微笑著解釋，隨後再次展開翅膀，飛回對面。",
        "我輕鬆地飛到雷飛上面，並伸出前蹄繞過肩膀環抱著他的胸部，試圖固定住他的身體。確認一切無誤後，我加大拍翅的力度，嘗試將他抱離地面。但他並沒離地，顯然這次的負重程度無法跟行李箱相提並論。",
        "我放鬆翅膀，做好心理準備後，再次嘗試。這次我加更多力道進來，並加快拍翅速度。努力終於有了結果，雷飛輕輕地離開了地面！感覺像是重獲自由，我的翅膀不再那麼沉重，終於能夠帶著他穩定地升空。",
        "把它放到行李箱旁後，我又飛回欣韻身旁，懸停在空中，語氣帶著一絲無奈：“我開始懷疑能不能把妳也給運過去了！才剛學會怎麼飛，就要我揹一隻小馬負重飛行。我感覺在抱雷飛時，我已經用盡全力了！妳怎麼辦？”",
        "“欸，那邊的，不准動，給我趴在地上。”這時從大樓方向傳來叫喊聲。",
        "我猛地轉頭，發現數位保安，甚至是警察正從大樓那邊快速趕來，眼神銳利，手中還握著對講機。他的語氣中帶著強烈的命令感，顯然已經察覺到了我們的不對勁。",
        "“大概是剛剛叫的支援，快點沒時間了！”我語氣著急地對欣韻喊道。",
        "“我當然知道要快，我又沒瞎！快點把我抱上去。”欣韻皺著眉抱怨道，“還有，不要在我耳朵正上方大喊！”然後伸出蹄子揉了揉自己的耳朵，試圖緩解剛才耳鳴帶來的不適感。",
        "我立刻把雙蹄伸到欣韻的腹部下方，試圖將他抬起來。我咬緊牙關，使出吃奶的力氣猛拍翅膀，我敢說翅膀絕對有爆青筋，可無論怎麼努力，他依然紋風不動。",
        "“也許你也可以試著拍動翅膀，幫我減輕一下負擔，行嗎？”我咬著牙低聲說道，額頭已經滲出汗水。",
        "欣韻聞言，立刻張開翅膀，開始緩慢地拍動，雖然動作還有些生疏，但至少能提供一點浮力。",
        "“對，就是這樣！”我能明顯感覺肩膀上的壓力稍微減輕了一些，趕緊加快拍翅速度，雙蹄緊抱著欣韻的身體，努力將她抬離地面。",
        "剛開始只是勉強離地幾公分，但隨著她越來越熟練地控制翅膀，我們的高度逐漸上升。就在這時，身後的喊聲再次傳來——",
        "“最後警告！馬上停下，不然我們要開槍了！”",
        "糟了，沒時間了！我咬緊牙關，使出最後的力氣，猛地帶著欣韻往上衝，筆直越過圍籬，在空中晃了一下，最終成功降落在雷飛和行李旁邊。",
        "“呼...終於過來了！”我大口喘著氣，翅膀因為過度使用而微微發抖，但還是忍不住露出一絲得意的笑容，“看來我真的越來越上蹄了！”",
        "“好了，快跑！”我才剛短暫得意了一下，立刻回過神來，催促兩位趕緊移動，“別忘了，我們還在被追！”",
        "我讓欣韻和雷飛先自行過河。兩人聽到我的指示後，立刻收起鬆懈的表情，毫不遲疑地踏入水中，迅速涉水而過。而我則再次奮力拍動翅膀，讓自己升空，同時伸出雙蹄，各抓起一個行李箱，朝著計劃中的撤退路線飛去。",
        "就在我努力拍動翅膀，拖著兩個行李箱飛越河面的同時，夜風拂過水面，掀起層層漣漪，倒映著我們的身影。欣韻和雷飛已經涉水到河中的淺灘，氣喘吁吁地等待著我。",
        "“在抱過一隻成年雄駒飛行後，兩個行李箱根本不算什麼！”我喃喃自語地對自己說。",
        "背後傳來急促的腳步聲與追兵的喊叫，他們顯然沒有放棄，開始沿著河岸搜尋我們的蹤跡。幸好有夜色掩護，我只能祈禱他們沒立刻發現我正從上方飛越。",
        "“快到了...”我低聲自語，忍住翅膀的酸痛，加快最後幾下拍動。在經過中途的淺灘後，終於穩穩降落在對岸。我放下行李，回頭望向對岸閃爍的燈光，深吸一口氣：“只希望他們不會輕易找到我們。”",
        "當我再次望向欣韻和雷飛時，他們已經涉水來到最後一段，只差一點就能上岸了！",
        "趁著他們還沒上岸，我索性坐下來，抬起前蹄輕輕揉著因超負荷而發酸的翅膀，試圖舒緩些許疲勞。同時，我調整呼吸，讓自己稍微休息一下，儘管心裡清楚，這片刻的喘息不會持續太久。",
        "等他們一踏上岸，我立刻收起翅膀，快步迎上前去，關切地問道：“你們還好嗎？剛剛飛越圍籬和過河時有沒有受傷？”目光迅速掃過他們全身，確認沒有明顯的傷口或不適後，我才稍微鬆了口氣。",
        "欣韻喘著氣，略顯疲憊地回應：“還好，就是有點喘，畢竟剛剛跑得太快了。”雷飛則輕鬆一笑，拍了拍自己濕透的身體：“沒事，除了有點累外，感覺非常刺激！”",
        "我看著他們，心中稍微放鬆，但還是不敢掉以輕心：“好，現在我們暫時安全了，趁他們沒追上來，先到前方漫步小道那找個地方藏一下。接下來可還得等夢瑄會合呢！”",
        "欣韻和雷飛點點頭，顧慮到我剛剛的付出，他們兩個默契地各自負責一個行李箱，輕輕拖動著，減少了我不必要的負擔。這樣的分工讓我感到一絲安慰，至少在這片混亂的夜晚，我們彼此還能互相扶持。",
        "明白形勢的緊迫，我們三個輕手輕腳地開始朝附近的林子走去。每一步都小心翼翼，我心裡隱隱擔心著，生怕會有過路人發現我們三個非人生物。",
        "周圍的黑暗仿佛吞噬了一切，只有偶爾的風聲和我們小心移動的腳步聲在寧靜的夜裡回蕩。我不由得再次回頭看了一眼，試圖辨認出是否有追兵的影子。不過，眼前的黑暗讓一切都變得模糊。",
        "我用翅膀小心翼翼地把手機拿了出來，滑開螢幕查看時間。奇怪，從我們和夢瑄分開後到現在已經過了將近一個鐘頭，怎麼還沒看到任何人影？理論上，她應該差不多已經到達了。但周圍一片寂靜，什麼都看不見。",
        "心中一陣疑惑，我不禁回想起分開時的情形，隱約感覺到一絲不安。夢瑄不會出事吧？我迅速收起手機，回頭對欣韻和雷飛說：“我們得再等一會兒，可能她還需要一些時間才能趕到。”",
        "還有提到不安感，其實從剛才開始，我一直有種被盯著看的感覺。我皺了皺眉，環顧四周，卻沒發現任何可疑之處。這種奇怪的感覺我也說不上來，但總之...希望只是我的錯覺吧。",
        
        "<div style='text-align: center; line-height: 9em; white-space: nowrap; overflow: hidden;'>***-－oOo－-***</div>",

        "就這樣，我們靜靜地等了十幾分鐘，但我再也忍不住了。“不行，我等不下去了，這樣下去我根本無法安心。我得沿著馬路回去找她。”我語氣急促，忍不住焦急地站了起來。",
        "欣韻和雷飛聽後，也對視了一眼，隨即點了點頭，顯然他們也理解我的心情。“我們一起去吧。”欣韻說道。",
        "我們剛走了幾步，突然遠處傳來一聲引擎的轟鳴。我向前一看，一台車正朝我們這邊駛來。我們三個立刻停下腳步，迅速趴伏進旁邊的草叢中，屏住呼吸，心中默默祈禱，盡量不讓自己被發現。",
        "車輛越來越近，車燈照亮了周圍的環境，讓我們的心跳不由自主地加速。每一秒都像是永遠那麼長。我甚至能聽到車輪在濕滑路面上碾過的聲音，氣氛緊繃得幾乎無法忍受。",
        "就在這時，那台休旅車緩緩停下。車輛停下的瞬間，我的心跳幾乎停滯。周圍的世界仿佛靜止了，只剩下那刺耳的煞車聲在耳邊回響。我屏住呼吸，盡力讓自己融入黑暗中，生怕一個微小的動作就會暴露我們的藏身之處。",
        "草叢的葉片在風中輕輕搖曳，隨著車門的開啟，車內的燈光一閃一閃，像是在徹底審視周圍的一切。我的心情愈加沉重，不知道這次會是什麼樣的結果。",
        "“說真的，你們躲藏的技術真是他媽有夠爛的。哥！我遠遠就看到你們往草叢裡躲了，而且要藏也不藏好一點，你的尾巴露出來了！”",
        "車門被拉開，一個熟悉的聲音傳來，語氣中帶著一絲嘲諷的冷笑。我心頭一驚，猛地轉頭望向聲音的來源。月光下，一個身影從車內走出，穿著那件熟悉的藍色外套，眼神帶著一絲玩味。",
        "“這就是所謂的露出馬尾吧！”她的聲音帶著些微揶揄。",
        "“夢瑄！”我幾乎是本能地低聲喊了出來，心中掠過一絲驚訝與疑惑。",
        "然而我隨即反應過來，馬上糾正她的說法：“妳想說的應該是露出馬腳吧！”",
        "夢瑄撇了撇嘴，不耐煩地揮了揮手：“隨便啦！趕快上車。”她說完後轉身，把兩個大行李箱塞進車內，顯得心不在焉。",
        "在確認行李都已放妥、所有小馬也都上車後，夢瑄繞回駕駛座，拉開車門準備坐進去。就在這時，她的目光被不遠處的草叢吸引——那裡傳來一陣沙沙聲，彷彿有什麼東西在裡面蠕動。",
        "她皺了皺眉，剛想走過去查看，卻被我出聲打斷：“怎麼了嗎？站著不動幹嘛？我們正在逃亡欸，趕快離開啦！”",
        "夢瑄頓了一下，最後還是搖搖頭，隨口回道：“喔，沒什麼。”原本燃起的好奇心就這樣被壓了下去。呢喃著也許只是小動物或風吧，便轉身坐進駕駛座，順手關上車門。",
        "確保大家都坐穩後，夢瑄輕踩油門，車輛平穩地駛離了西堤漫步小道，漸漸消失在夜色之中。",
        "“所以，我剛剛有錯過什麼嗎？”夢瑄見我們太安靜，忍不住開口向我們詢問。",
        "坐在副駕的我轉頭望向專注前方路況的夢瑄，帶著滿腔疑惑，輕聲反問：“我才是問這個問題的人吧！”",
        "“首先，這台車...”我伸出蹄子擺了擺，表示我對這台車的疑惑和後續。",
        "夢瑄似乎已經猜到我想問什麼，便開始講述她的故事。“喔，這台車是我在機場內的租車公司‹Avis Car Rental›租的。”",
        "正當我準備繼續追問時，夢瑄就像能讀取我的想法般，搶先一步繼續解釋下去。",
        "“其實，在出發前我就請朋友幫忙申請國際駕照了，所以租車這件事沒遇到什麼問題。簽合約時，我還特別確認了是否能跨境行駛——換句話說，我們現在要直接開去西雅圖都行，完全沒問題。",
        "至於租期，因為我不確定我們會需要多久，所以先租了半個月。如果時間不夠，也不需要回來續約，系統會自動從我的信用卡扣款，只是費用會比合約價稍微貴一點而已。”",
        "說到這裡，她伸手從隨身包裡拿出幾張紙，遞給我們，繼續道：“這些是單據和收據，上面有三組帳號密碼，分別對應你們三台手機。這是eSIM卡，不需要額外攜帶實體WiFi分享器，只要在支援的國家就能直接連上網路。每張eSIM還附有專屬號碼，這樣我打電話給你們時，就能直接聯繫到。”",
        "她頓了一下，補充道：“我的手機已經設定好了，也輸入了你們的號碼。單據上有我的號碼，你們之後記得存起來就行。”",
        "欣韻和雷飛接過單據，仔細檢查上面的資訊，而我則快速掃視了一遍，確保沒有遺漏重要細節。",
        "“還真是有備而來啊。”我一邊將單據收好，一邊感嘆道，“沒想到你連這些細節都準備得這麼周全。”",
        "夢瑄聳聳肩，語氣輕鬆地笑道：“畢竟這次行動風險太高，能準備的我就盡量準備，總不能讓大家連網路都沒有吧。”",
        "我點點頭，確實，這趟旅程到目前為止充滿太多變數，有網路至少能讓我們更方便溝通和查找資訊。",
        "“對了，該輪到你們交代了！”這時，欣韻接上剛才的話題，語氣帶著幾分好奇，“你們剛剛到底幹了什麼？”",
        "為了滿足我妹的好奇心，我只好一五一十地向她娓娓道來。",
                                                  
        "<div style='text-align: center; line-height: 9em; white-space: nowrap; overflow: hidden;'>***-－oOo－-***</div>",

        "“<span style='color: #ffffff00'>我靠，</span>為什麼你們的故事線這麼刺激？我也好想體驗一下啊！”夢瑄激動地喊道，眼裡閃爍著興奮的光芒。",
        "我無奈地翻了個白眼，嘆了口氣：“妳確定嗎？如果剛才被逮到，我們現在可能已經在小黑屋裡喝免費咖啡了。”",
        "雷飛也補充道：“而且我們還得狼狽地丟行李擋路，這可不是什麼電影情節，是真的很累！”",
        "夢瑄卻毫不在意地聳聳肩，嘴角掛著笑：“可是一想到在機場開著拖車狂飆、還有用行李砸人的畫面，真的太有畫面感了！我光是想像就覺得爽。”",
        "“那下次就讓妳去試試看好了。”欣韻抬起眉毛，語氣似笑非笑。",
        "夢瑄聳聳肩，笑得毫不在意：“好啊，那下次換我來指揮吧！”",
        "我無奈地搖搖頭，靠在座椅上嘆了口氣：“現在還有心情開玩笑？我們還沒真正擺脫危險呢。”",
        "雷飛也點頭附和：“是啊，機場的人大概已經報警了，畢竟有傷員，現在外面可能有警察在附近找我們。”",
        "聽到這話，夢瑄的表情總算嚴肅了一點，她瞥了眼後視鏡，確認後方沒有可疑車輛後，才開口向我詢問有沒有後續計畫。",
        "我沉思了一會，回應道：“反正我們得趕緊遠離這裡，先找個地方暫時隱藏，等情況平穩一點再說。”",
        "欣韻接著補充：“沒錯，最好能找到一個比較安全的地方，讓我們可以休息一下，整理計劃。畢竟，我們現在什麼都沒準備，光是逃跑就讓我們筋疲力盡了。”",
        "“我覺得我們應該趕緊找個旅館休息一下。”雷飛建議道。",
        "“嗯，我也贊成。”我點點頭，感覺身心疲憊，這一路的波折已經讓我們有些筋疲力盡。",
        "“真的不知道要去哪的話，不如去西雅圖晃晃？”夢瑄帶著玩味的語氣建議。",
        "聽到夢瑄提的誇張建議，我不由得瞪了她一眼，心裡忍不住有些無奈。",
        "“嘿嘿，還是算了。”夢瑄乾笑兩聲，然後一腳踩下油門，“不過現在最重要的，是我們要去哪裡？”",

        "<div class='line'></div>",
        "<div style='margin: -1rem 0rem; font-weight: bold;'>備註：</div>",
        "<div style='margin-bottom: -1.5rem;'>1. 弗雷澤河：原文為(Fraser River)，加拿大華人稱為菲沙河，是加拿大卑詩省最長的河流、加拿大第十長河流。全長1,375公里，流域面積220,000平方公里，當中一小部份位於美國華盛頓州。發源自洛磯山，在溫哥華和列治文之間流入太平洋。在機場邊有一個淺灘叫做(Swishwash Island)，也是主角剛剛跨越的地方。</div>",
        "<div style='margin-bottom: -1.5rem;'>2. 西堤漫步小道：列治文西堤漫步小道(West Dyke Trail)是加拿大溫哥華不列顛哥倫比亞省列治文(Richmond)一條觀日落賞晚霞的最佳小道。這條長約5.5公裏的健行步道北起新地公園(Terra Nova Rural Park)，南至蓋瑞岬公園(Garry Point Park)。漫步在這條步道上，可以近觀深入到喬治亞灣(Georgia Strait)的水生植物茂密的鱘魚淺灘(Sturgeon Bank)，也可以不時與各種不同的鳥類相遇。</div>",
        "<div style='margin-bottom: -1.5rem;'>3. 51區：位於內華達州南部，距拉斯維加斯西北偏北83英里（134公里），是對美國空軍設於內華達州試驗場內的保密設施的統稱。傳說這是美國政府對墜毀的外星人飛船進行試驗的地方。一直是許多UFO迷嚮往的神秘地。</div>",
        "<div style='margin-bottom: -1.5rem;'>4. 溫帶海洋氣候：溫哥華屬於溫帶海洋性氣候，氣候溫和，四季宜人，全年都適合旅遊。市內草地常綠、繁花似錦。冬季少下雪，但雨水充沛，有“加拿大雨都”之稱。這也是文章內為何提到路面是濕滑的原因。</div>",
        "<div style='margin-bottom: -1.5rem;'>5. Avis Car Rental：是加拿大第4大的租車公司，與Budget同屬一間母公司。全球也有分布很多據點分店。</div>",
        "<div style='margin-bottom: -4rem;'>6. eSim卡：這是符合業界標準的數位無實體SIM卡，可讓你啟用電信業者的行動方案，而不需要使用實體SIM卡。到國外就不用再租笨重的WiFi分享器，只要在有支援的國家就可以直接暢遊網路，及撥號。</div>",
    ];
    
    paragraphs.reverse().forEach(text => {
            const paragraph = document.createElement('p');
            paragraph.innerHTML = text;
            title.insertAdjacentElement('afterend', paragraph);
        });

//創作期間2025/02/14-2025/02/20
//上傳時間2025/02/21