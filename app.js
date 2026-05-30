/* ══════════════════════════════════════════
   DATA — MOODS & VERSES
══════════════════════════════════════════ */
const MOODS = {
  happy:{label:'Happy',icon:'icons/happy.png',desc:'Feeling joyful, grateful & blessed',cls:'m-happy',accent:'#5f7a86',
    quote:'Joy is the serious business of Heaven. Let these verses amplify the praise already in your heart and remind you of the source of all true joy.',
    verses:[
      {ref:'John 15:11',text:'"I have told you this so that my joy may be in you and that your joy may be complete."',meaning:'Jesus offers not just any joy, but His own divine joy — complete and unshakeable, rooted in relationship with God rather than in circumstances. This is joy that nothing can permanently take away.',context:'Jesus\' final discourse to His disciples the night before His crucifixion, preparing them for His departure.',tags:['Joy','Completeness','Abiding']},
      {ref:'Philippians 4:4',text:'"Rejoice in the Lord always. I will say it again: Rejoice!"',meaning:'Paul writes from prison and still commands double rejoicing. True joy is anchored in who God is, not what we have. Because God never changes, our reason for joy never runs out.',context:'Written from prison by Paul to the church at Philippi, a community he deeply loved.',tags:['Joy','Praise','Always']},
      {ref:'Nehemiah 8:10',text:'"Do not grieve, for the joy of the LORD is your strength."',meaning:'Spiritual joy is not just an emotion — it is fuel for endurance. When we are joyful in God, that joy becomes the power source for everything else in our lives.',context:'Nehemiah addressed returned exiles rebuilding Jerusalem and rediscovering the Law of Moses.',tags:['Joy','Strength','Encouragement']},
      {ref:'Psalm 16:11',text:'"You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand."',meaning:'Everything the world offers pales beside the pleasure of God\'s presence. This verse invites us to pursue closeness with God not as duty, but as the deepest delight available to us.',context:'A Psalm of David expressing confident trust in God as his sole inheritance and portion.',tags:['Joy','Presence','Eternity']},
      {ref:'Romans 15:13',text:'"May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit."',meaning:'Joy and peace are not things we manufacture — they are gifts poured into us as we trust. When we believe God is who He says He is, the Spirit fills us to overflowing.',context:'Paul\'s benediction over the Roman Christians at the close of his theological masterpiece.',tags:['Joy','Hope','Holy Spirit']},
      {ref:'Psalm 126:3',text:'"The LORD has done great things for us, and we are filled with joy."',meaning:'Gratitude fuels joy. When we pause to rehearse what God has already done, our hearts naturally overflow with gladness. This verse declares joy by remembering faithfulness.',context:'A song of ascents, likely sung as Israel returned from Babylonian exile.',tags:['Joy','Gratitude','Remembrance']},
      {ref:'Zephaniah 3:17',text:'"The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing."',meaning:'The Creator of the universe sings over you with joy. You are not just tolerated by God — you are His delight. This verse is one of the most extraordinary promises of God\'s affection in all of Scripture.',context:'Zephaniah prophesied of God\'s ultimate restoration of Israel, describing the joy of God Himself.',tags:['Joy','Love','God\'s Delight']},
      {ref:'1 Peter 1:8',text:'"Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy."',meaning:'Faith produces joy that surpasses description. Even without seeing Jesus physically, believers experience a deep, glorious gladness — a foretaste of what awaits in eternity.',context:'Peter writing to persecuted Christians scattered throughout Asia Minor.',tags:['Joy','Faith','Eternity']},
      {ref:'Psalm 118:24',text:'"The LORD has done it this very day; let us rejoice today and be glad."',meaning:'Today is a gift from God. This verse invites us to look for what God is doing right now and respond with immediate, present-moment joy. Every single day carries divine purpose.',context:'A processional psalm sung at the feast of Tabernacles, celebrating God\'s salvation.',tags:['Joy','Present Moment','Gratitude']},
      {ref:'Galatians 5:22–23',text:'"But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control."',meaning:'Joy is a fruit of the Holy Spirit — it grows naturally when we walk in step with God. We cannot manufacture lasting joy; it blooms from a surrendered life. The more we yield, the more joy increases.',context:'Paul contrasting the works of the flesh with the fruit of a Spirit-led life to the Galatian churches.',tags:['Joy','Holy Spirit','Character']},
      {ref:'Isaiah 12:3',text:'"With joy you will draw water from the wells of salvation."',meaning:'Salvation is not just a one-time transaction — it is an endless well from which we continually draw joy. When we return to the truth of what God has done for us, joy rises again.',context:'Isaiah\'s song of praise anticipating God\'s ultimate rescue of His people.',tags:['Joy','Salvation','Renewal']},
      {ref:'Acts 2:28',text:'"You have made known to me the paths of life; you will fill me with joy in your presence."',meaning:'Peter quotes David to demonstrate that resurrection joy was always part of God\'s plan. The paths of life lead to God\'s presence — and that presence is the fullness of joy.',context:'Peter\'s Pentecost sermon, quoting Psalm 16 to explain the resurrection of Jesus.',tags:['Joy','Resurrection','Presence']}
    ]
  },
  angry:{label:'Angry',icon:'icons/angry.png',desc:'Feeling upset, frustrated or wronged',cls:'m-angry',accent:'#8c6f63',
    quote:'Anger itself is not sin — but what we do with it can be. Let God transform your fire into something holy and purposeful.',
    verses:[
      {ref:'James 1:19–20',text:'"Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires."',meaning:'Rushing to anger short-circuits both our relationships and our witness. Listening first, speaking second, and slowing to anger is a spiritual discipline that transforms every conflict.',context:'James\' practical wisdom on how Christians should handle emotions and trials.',tags:['Anger','Wisdom','Self-control']},
      {ref:'Ephesians 4:26–27',text:'"In your anger do not sin: Do not let the sun go down while you are still angry, and do not give the devil a foothold."',meaning:'Paul acknowledges anger exists — but warns against letting it linger. Unresolved anger becomes a stronghold the enemy exploits. Addressing conflict before nightfall is spiritual warfare.',context:'Paul\'s instruction to the church on godly community life and personal holiness.',tags:['Anger','Conflict','Spiritual Warfare']},
      {ref:'Proverbs 15:1',text:'"A gentle answer turns away wrath, but a harsh word stirs up anger."',meaning:'A single soft word can disarm an entire argument. Gentleness is not passivity — it is a strategic, courageous choice to diffuse rather than escalate tension.',context:'Solomon\'s wisdom collected in Proverbs for all who seek understanding in relationships.',tags:['Anger','Words','Wisdom']},
      {ref:'Proverbs 29:11',text:'"Fools give full vent to their rage, but the wise bring calm in the end."',meaning:'Venting every feeling might feel satisfying in the moment, but wisdom is measured by outcomes. The person who brings calm — not the loudest voice — leaves the greatest positive impact.',context:'A proverb contrasting foolish impulsiveness with wise self-mastery.',tags:['Anger','Wisdom','Self-control']},
      {ref:'Psalm 37:8',text:'"Refrain from anger and turn from wrath; do not fret — it leads only to evil."',meaning:'Simmering anger has a predictable destination: evil. Releasing anger to God is not resignation — it is trust that He sees, judges rightly, and will act. Letting go is an act of faith.',context:'David\'s meditation on trusting God when the wicked seem to prosper.',tags:['Anger','Trust','Release']},
      {ref:'Colossians 3:13',text:'"Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you."',meaning:'The measure of our forgiveness toward others is the measure of grace God has shown us. Forgiveness is not excusing wrong — it is releasing the debt so it no longer holds us captive.',context:'Paul\'s instructions to the church at Colossae on how believers should relate to one another.',tags:['Forgiveness','Anger','Grace']},
      {ref:'Proverbs 16:32',text:'"Better a patient person than a warrior, one with self-control than one who takes a city."',meaning:'The greatest battles are often internal. Conquering your own anger takes more courage and strength than any external victory. God values the hero who masters himself.',context:'Solomon\'s proverbs on the superiority of wisdom and self-mastery over brute strength.',tags:['Anger','Patience','Self-control']},
      {ref:'Romans 12:19–21',text:'"Do not take revenge, my dear friends, but leave room for God\'s wrath... Do not be overcome by evil, but overcome evil with good."',meaning:'Revenge chains us to bitterness. Trusting God\'s perfect justice while responding with unexpected goodness is one of the most transformative acts a human being can perform.',context:'Paul\'s practical instructions on living out Christian love in a broken world.',tags:['Anger','Revenge','Goodness']},
      {ref:'Psalm 4:4',text:'"Tremble and do not sin; when you are on your beds, search your hearts and be silent."',meaning:'There is a holy pause between feeling and acting. David invites strong emotions to lead us into self-examination rather than explosion. Silence before God in heated moments is powerful prayer.',context:'A psalm David wrote while fleeing Absalom, his own son — in intense personal anguish.',tags:['Anger','Stillness','Self-examination']},
      {ref:'Matthew 5:22',text:'"But I tell you that anyone who is angry with a brother or sister will be subject to judgment."',meaning:'Jesus raises the bar: not just actions, but internal attitudes matter to God. This is a call not to suppress anger but to address its roots — hurt, pride, or a desire for control.',context:'Part of the Sermon on the Mount where Jesus deepens the meaning of the commandments.',tags:['Anger','Character','Kingdom']},
      {ref:'Ecclesiastes 7:9',text:'"Do not be quickly provoked in your spirit, for anger resides in the lap of fools."',meaning:'Quick offense is a spiritual immaturity. The wise person builds slow, thoughtful responses rather than impulsive reactions. Every provocation is an invitation to grow.',context:'Qohelet\'s wisdom on the futility of reactivity and the value of patient wisdom.',tags:['Anger','Wisdom','Maturity']},
      {ref:'Matthew 18:21–22',text:'"Peter asked, \u201cLord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?\u201d Jesus answered, \u201cI tell you, not seven times, but seventy-seven times.\u201d"',meaning:'Jesus redefines forgiveness as unlimited and ongoing — a lifestyle, not a transaction. The number seventy-seven is symbolic of completeness: forgive without keeping score.',context:'Jesus teaching on forgiveness in the context of community life among His disciples.',tags:['Forgiveness','Anger','Grace']}
    ]
  },
  sad:{label:'Sad',icon:'icons/sad.png',desc:'Feeling down, heavy or brokenhearted',cls:'m-sad',accent:'#2a9b52',
    quote:'Grief is not weakness — even Jesus wept. You are not alone in your sorrow. These verses are God\'s tender hand reaching toward you.',
    verses:[
      {ref:'Psalm 34:18',text:'"The LORD is close to the brokenhearted and saves those who are crushed in spirit."',meaning:'When pain breaks us open, God moves in — not away. The very brokenness we want to hide is what draws God\'s nearness. You do not need to have it together for Him to come close.',context:'David wrote this psalm after feigning madness before King Abimelek to escape danger — a personal low point.',tags:['Comfort','Nearness','Healing']},
      {ref:'Matthew 5:4',text:'"Blessed are those who mourn, for they will be comforted."',meaning:'Jesus declares something radical: mourners are blessed. Grief opens us to divine comfort the self-sufficient never receive. Mourn honestly, and receive what only God can give.',context:'Part of the Sermon on the Mount — Jesus\' foundational teaching on the Kingdom of God.',tags:['Comfort','Grief','Blessing']},
      {ref:'Psalm 30:5',text:'"Weeping may stay for the night, but rejoicing comes in the morning."',meaning:'Every night eventually ends. This verse contextualizes pain without minimizing it. God is writing a story that moves toward joy, and the chapter you are in now is not the final one.',context:'A psalm of dedication, reflecting on God\'s restorative power after personal crisis.',tags:['Hope','Grief','Healing']},
      {ref:'Isaiah 41:10',text:'"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."',meaning:'Four powerful promises: presence, identity, strength, upholding. When sadness makes us feel alone and weak, God answers with the fullness of who He is. He actively holds you up.',context:'God\'s direct words to Israel during exile, assuring them of His ongoing faithfulness.',tags:['Comfort','Strength','Presence']},
      {ref:'John 14:27',text:'"Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid."',meaning:'The peace Jesus gives is fundamentally different from the world\'s version. The world offers distraction; Jesus offers a deep supernatural stillness that surpasses understanding.',context:'Jesus\' farewell words to His disciples before His crucifixion — among the most comforting in Scripture.',tags:['Peace','Comfort','Hope']},
      {ref:'2 Corinthians 1:3–4',text:'"The Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God."',meaning:'Your pain has purpose. God\'s comfort flows into us so it can flow through us to others. Nothing you suffer is wasted in God\'s economy — it becomes the deepest well of compassion.',context:'Paul\'s personal testimony about enduring severe suffering in Asia and God\'s sustaining power.',tags:['Comfort','Purpose','Community']},
      {ref:'Revelation 21:4',text:'"He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away."',meaning:'This is the final destination of every believer\'s story. God Himself will tenderly wipe your tears away — and what caused them will never exist again. Hold on.',context:'John\'s vision of the New Jerusalem — God\'s ultimate restoration of all things.',tags:['Hope','Eternity','Comfort']},
      {ref:'Psalm 23:4',text:'"Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me."',meaning:'The valley is not a detour — it is part of the path. The Shepherd is in the valley with you. God does not abandon us in dark seasons; He walks them beside us.',context:'The beloved shepherd psalm, one of the most quoted passages in all of Scripture.',tags:['Comfort','Presence','Trust']},
      {ref:'Romans 8:18',text:'"I consider that our present sufferings are not worth comparing with the glory that will be revealed in us."',meaning:'Paul places every suffering on a cosmic scale. What we endure now, however heavy, is not the measure of our story — the glory awaiting us eclipses all of it.',context:'Paul\'s argument that the Holy Spirit sustains believers through present suffering toward future glory.',tags:['Hope','Suffering','Eternity']},
      {ref:'Lamentations 3:22–23',text:'"Because of the LORD\'s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness."',meaning:'Even in the ruins of Jerusalem, Jeremiah found this anchor: God\'s compassions reset every single morning. No matter how broken yesterday was, today is a fresh supply of mercy.',context:'Jeremiah writing Lamentations after the destruction of Jerusalem — one of the darkest texts in the Bible.',tags:['Comfort','Mercy','New Beginnings']},
      {ref:'Isaiah 43:2',text:'"When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned."',meaning:'God does not promise to remove every trial — He promises to be present in every one. The waters and fires are real, but so is His hand holding you through them.',context:'God\'s reassurance to Israel that His redemptive presence would sustain them through all hardship.',tags:['Comfort','Presence','Endurance']},
      {ref:'Psalm 147:3',text:'"He heals the brokenhearted and binds up their wounds."',meaning:'God is a healer — not just of physical bodies but of broken hearts and emotional wounds. The same Creator who hung the stars tends personally to the torn places in you.',context:'A hymn of praise celebrating God\'s care for both the cosmos and the crushed in spirit.',tags:['Healing','Comfort','God\'s Care']}
    ]
  },
  grateful:{label:'Grateful',icon:'icons/grateful.png',desc:'Feeling thankful, blessed & content',cls:'m-grateful',accent:'#c0392b',
    quote:'Gratitude is the language of a soul that has encountered God\'s goodness. Let these verses deepen your thankfulness and anchor your heart in praise.',
    verses:[
      {ref:'1 Thessalonians 5:18',text:'"Give thanks in all circumstances; for this is God\'s will for you in Christ Jesus."',meaning:'Not for all circumstances — but in them. God\'s will is not that we pretend everything is fine, but that we cultivate a grateful posture in every season. Thanksgiving transforms both perspective and relationship.',context:'Paul\'s closing instructions to the Thessalonian church on living in continuous spiritual health.',tags:['Gratitude','God\'s Will','Contentment']},
      {ref:'Psalm 107:1',text:'"Give thanks to the LORD, for he is good; his love endures forever."',meaning:'Gratitude anchored in God\'s character — not just His gifts — survives every season. Even when circumstances feel hard, His goodness and love are eternal. This is the bedrock of biblical thanksgiving.',context:'A psalm calling Israel to remember God\'s redemption from various forms of distress.',tags:['Gratitude','God\'s Goodness','Worship']},
      {ref:'Colossians 3:17',text:'"Whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him."',meaning:'Gratitude is not confined to special moments. Paul weaves thanksgiving into every single action — eating, working, speaking. Every moment becomes a worship service when done with a thankful heart.',context:'Paul\'s instruction on the character of the renewed life in Christ.',tags:['Gratitude','Worship','Everyday Life']},
      {ref:'Psalm 118:24',text:'"The LORD has done it this very day; let us rejoice today and be glad."',meaning:'Today, right now, God has acted. Not just yesterday in history, but today in your story. This verse invites us to find what God is doing this moment and respond with immediate joy.',context:'A processional psalm celebrating God\'s salvation, sung at the feast of Tabernacles.',tags:['Gratitude','Joy','Present Moment']},
      {ref:'James 1:17',text:'"Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows."',meaning:'James traces every good thing back to its source: a constant, generous, unchanging Father. When we recognise who our gifts come from, gratitude becomes not just appropriate but inevitable.',context:'James\' argument that God is wholly good and not the source of temptation.',tags:['Gratitude','God\'s Goodness','Generosity']},
      {ref:'Ephesians 5:20',text:'"Always giving thanks to God the Father for everything, in the name of our Lord Jesus Christ."',meaning:'"Always" and "for everything" are extraordinary words. This is not selective gratitude for the pleasant things — it is a comprehensive posture of thanksgiving that trusts God\'s hand in all.',context:'Paul\'s instructions to the Ephesian church on Spirit-filled living.',tags:['Gratitude','Always','Trust']},
      {ref:'1 Chronicles 16:34',text:'"Give thanks to the LORD, for he is good; his love endures forever."',meaning:'This refrain appears throughout Psalms and Chronicles like a heartbeat of worship. The repetition is intentional — it is truth that must be rehearsed daily until it becomes the rhythm of our lives.',context:'David\'s song of praise when the Ark of the Covenant was brought to Jerusalem.',tags:['Gratitude','Worship','God\'s Love']},
      {ref:'Psalm 100:4',text:'"Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name."',meaning:'Thanksgiving is the door into God\'s presence. Before we bring requests, before we list needs — we enter with gratitude. Praise and thanksgiving are the atmosphere of encounter.',context:'A call to worship for all the earth to recognize God as Creator and good Shepherd.',tags:['Gratitude','Worship','Praise']},
      {ref:'Colossians 3:15',text:'"Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful."',meaning:'Gratitude and peace are deeply linked. When we are genuinely thankful, anxiety loses its grip. Paul connects thankfulness to the peace of Christ — they grow together.',context:'Paul\'s instructions on the communal and spiritual life of the church at Colossae.',tags:['Gratitude','Peace','Community']},
      {ref:'Hebrews 12:28',text:'"Therefore, since we are receiving a kingdom that cannot be shaken, let us be thankful, and so worship God acceptably with reverence and awe."',meaning:'Gratitude grounded in the unshakeable Kingdom of God is the foundation of lasting worship. When we remember what we have in Christ, thankfulness rises naturally and sustains us.',context:'The author of Hebrews comparing Mount Sinai with the New Covenant of grace.',tags:['Gratitude','Kingdom','Worship']},
      {ref:'2 Corinthians 9:15',text:'"Thanks be to God for his indescribable gift!"',meaning:'The ultimate cause of thanksgiving is Jesus Himself — God\'s indescribable gift. Every other reason to give thanks flows from this one. He is the source of all gratitude.',context:'Paul\'s appeal for generosity among the Corinthian church, grounded in the generosity of God.',tags:['Gratitude','Jesus','Generosity']},
      {ref:'Psalm 9:1',text:'"I will give thanks to you, LORD, with all my heart; I will tell of all your wonderful deeds."',meaning:'Whole-hearted gratitude spills outward into testimony. When we truly appreciate what God has done, we cannot stay silent. Gratitude naturally becomes evangelism.',context:'David\'s celebration of God\'s righteous judgment and protection of the vulnerable.',tags:['Gratitude','Testimony','Wholehearted']}
    ]
  },
  anxious:{label:'Anxious',icon:'icons/anxious.png',desc:'Feeling worried, fearful or overwhelmed',cls:'m-anxious',accent:'#0a6b30',
    quote:'Anxiety tells you the future is uncertain — but God already holds it. These verses are invitations to release your grip and trust the One who never loses control.',
    verses:[
      {ref:'Philippians 4:6–7',text:'"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."',meaning:'The antidote to anxiety is not willpower — it is prayer. God invites us to bring every specific worry to Him with gratitude, and in return He gives a peace that cannot be explained by logic. Note: it guards our hearts and minds — peace acts as a spiritual sentry.',context:'Paul\'s climactic instruction on anxiety, written from prison to the Philippian church.',tags:['Peace','Prayer','Trust']},
      {ref:'1 Peter 5:7',text:'"Cast all your anxiety on him because he cares for you."',meaning:'"Cast" is deliberate — like throwing something off a cliff. God wants us to give Him our anxiety entirely. The reason is personal: not duty or obligation — He cares for you, specifically, deeply, personally.',context:'Peter\'s encouragement to Christians facing persecution under Emperor Nero.',tags:['Peace','Care','Release']},
      {ref:'Matthew 6:34',text:'"Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own."',meaning:'Jesus invites us into the gift of the present moment. Most anxiety lives in the future — imagining worst cases that may never come. Staying in today, trusting God for tomorrow, restores the joy anxiety steals.',context:'Part of the Sermon on the Mount — Jesus teaching on trusting God over material and future concerns.',tags:['Peace','Present Moment','Trust']},
      {ref:'Isaiah 41:10',text:'"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."',meaning:'God does not just acknowledge our fear — He answers it with His presence. Every line begins with God\'s action: I am, I will. The battle against anxiety is not ours alone.',context:'God\'s covenant reassurance to Israel during a season of great national fear and uncertainty.',tags:['Courage','Strength','God\'s Presence']},
      {ref:'Psalm 46:1–2',text:'"God is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea."',meaning:'Even in extreme circumstances, fear does not have the final word — God does. "Therefore we will not fear" is a declaration made in the middle of the storm, not after it passes.',context:'Likely written after Jerusalem was miraculously delivered from Assyrian invasion.',tags:['Courage','Refuge','Strength']},
      {ref:'John 14:1',text:'"Do not let your hearts be troubled. You believe in God; believe also in me."',meaning:'Jesus gives both a command and a prescription: believe. Trust in God\'s character is the direct antidote to a troubled heart. This is not naïve optimism — it anchors the heart in One who has never failed.',context:'Jesus\' comforting words to His disciples the night before His crucifixion.',tags:['Peace','Trust','Belief']},
      {ref:'Proverbs 3:5–6',text:'"Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."',meaning:'Anxiety often comes from leaning too hard on our own ability to understand and control outcomes. When we transfer that trust to God completely, He takes responsibility for the direction.',context:'Solomon\'s foundational instruction on the wisdom of humble dependence on God.',tags:['Trust','Guidance','Surrender']},
      {ref:'Isaiah 26:3',text:'"You will keep in perfect peace those whose minds are steadfast, because they trust in you."',meaning:'Perfect peace — shalom — is not the absence of problems but the presence of God within them. A steadfast mind has decided: whatever happens, I trust God. That decision produces peace the world cannot explain.',context:'Isaiah\'s song of praise anticipating God\'s ultimate victory and the peace of His redeemed people.',tags:['Peace','Trust','Steadfastness']},
      {ref:'2 Timothy 1:7',text:'"For God has not given us a spirit of fear, but of power, love and self-discipline."',meaning:'Fear does not come from God. The Holy Spirit imparts power to act, love to connect, and self-discipline to remain steady. When fear rises, remember its source — and then remember your Source.',context:'Paul\'s encouragement to Timothy, a young leader struggling with timidity.',tags:['Courage','Power','Identity']},
      {ref:'Matthew 11:28–30',text:'"Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls."',meaning:'Jesus specifically invites the exhausted and overwhelmed — not the strong. He does not offer productivity tips; He offers Himself. The rest He gives is not absence of activity but the peace of shared burden.',context:'Jesus speaking to crowds exhausted by the demands of religious law and daily hardship.',tags:['Rest','Peace','Surrender']},
      {ref:'Psalm 55:22',text:'"Cast your cares on the LORD and he will sustain you; he will never let the righteous be shaken."',meaning:'God can carry what is crushing you. Casting our cares is an act of trust — releasing the burden from our hands into His. And He promises: He will sustain you. He will not let you be destroyed.',context:'David\'s cry to God during a period of betrayal by a close friend.',tags:['Trust','Sustaining','Peace']},
      {ref:'Romans 8:38–39',text:'"For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."',meaning:'The most comprehensive anti-anxiety verse in Scripture. Paul lists every possible threat — death, future, cosmic powers, height, depth — and declares none of them can break God\'s hold on you. Not one.',context:'The triumphant conclusion to Paul\'s teaching on salvation, suffering, and the Spirit in Romans 8.',tags:['Peace','God\'s Love','Security']}
    ]
  }
};

/* Daily verse pool */
const DAILY_POOL=[
  {ref:'Jeremiah 29:11',text:'"For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."'},
  {ref:'Romans 8:28',text:'"And we know that in all things God works for the good of those who love him, who have been called according to his purpose."'},
  {ref:'Psalm 23:1',text:'"The LORD is my shepherd, I lack nothing."'},
  {ref:'John 3:16',text:'"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."'},
  {ref:'Proverbs 3:5–6',text:'"Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."'},
  {ref:'Isaiah 40:31',text:'"But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."'},
  {ref:'Philippians 4:13',text:'"I can do all this through him who gives me strength."'},
  {ref:'Joshua 1:9',text:'"Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go."'},
  {ref:'Matthew 6:33',text:'"But seek first his kingdom and his righteousness, and all these things will be given to you as well."'},
  {ref:'Psalm 46:10',text:'"Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth."'},
  {ref:'2 Corinthians 5:17',text:'"Therefore, if anyone is in Christ, the new creation has come: the old has gone, the new is here!"'},
  {ref:'Lamentations 3:22–23',text:'"Because of the LORD\'s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness."'},
  {ref:'Psalm 119:105',text:'"Your word is a lamp for my feet, a light on my path."'},
  {ref:'Romans 15:13',text:'"May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit."'}
];

/* Reading Plans */
const PLANS=[
  {id:'joy7',title:'7 Days of Joy',desc:'A week-long journey through Scripture\'s most joyful promises',emoji:'☀️',color:'linear-gradient(135deg,#4a6878,#5f7a86)',duration:7,
    days:[
      {day:1,ref:'John 15:11',text:'"I have told you this so that my joy may be in you and that your joy may be complete."',reflection:'Begin this week by receiving the joy Jesus offers — not manufactured happiness, but His own divine gladness living in you.'},
      {day:2,ref:'Philippians 4:4',text:'"Rejoice in the Lord always. I will say it again: Rejoice!"',reflection:'Paul commands double rejoicing from prison. Consider today: what reason for joy exists regardless of your circumstances?'},
      {day:3,ref:'Nehemiah 8:10',text:'"Do not grieve, for the joy of the LORD is your strength."',reflection:'Let the joy of God become your fuel today. Where are you running on empty? Let His joy strengthen that area.'},
      {day:4,ref:'Psalm 16:11',text:'"You will fill me with joy in your presence, with eternal pleasures at your right hand."',reflection:'Spend time in God\'s presence today — not with a list of requests, but simply to be near Him and receive His joy.'},
      {day:5,ref:'Romans 15:13',text:'"May the God of hope fill you with all joy and peace as you trust in him."',reflection:'Trust is the soil in which joy grows. What are you anxious about today? Choose to trust God with it and watch joy rise.'},
      {day:6,ref:'Zephaniah 3:17',text:'"He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing."',reflection:'God sings over you with joy. Let that truth settle deep today. You are not just tolerated — you are His delight.'},
      {day:7,ref:'James 5:13',text:'"Is anyone happy? Let them sing songs of praise."',reflection:'Close this week by turning your joy into worship. Sing, pray, declare — let today\'s joy spill outward as an offering to God.'}
    ]},
  {id:'peace5',title:'5 Days of Peace',desc:'Daily readings for a heart wrestling with worry and fear',emoji:'🕊️',color:'linear-gradient(135deg,#064a20,#0a6b30)',duration:5,
    days:[
      {day:1,ref:'Philippians 4:6–7',text:'"Do not be anxious about anything, but in every situation... present your requests to God."',reflection:'Today, make a list of your anxieties and one by one, bring each one to God in prayer. Release them; don\'t just report them.'},
      {day:2,ref:'Isaiah 26:3',text:'"You will keep in perfect peace those whose minds are steadfast, because they trust in you."',reflection:'Perfect peace begins with a steadfast mind. What thought pattern can you redirect toward trust today?'},
      {day:3,ref:'John 14:27',text:'"Peace I leave with you; my peace I give you... Do not let your hearts be troubled."',reflection:'Jesus gave you His own peace as a permanent gift. It\'s already yours — the invitation today is to receive and walk in it.'},
      {day:4,ref:'Psalm 46:10',text:'"Be still, and know that I am God."',reflection:'Set aside 10 minutes of intentional stillness today. No phone, no noise. Let God meet you in the quiet.'},
      {day:5,ref:'Romans 8:38–39',text:'"Neither the present nor the future... will be able to separate us from the love of God."',reflection:'Nothing can break God\'s hold on you. Let this unchangeable truth be the foundation under your feet as this week ends.'}
    ]},
  {id:'healing7',title:'7 Days of Healing',desc:'A gentle journey through grief, loss, and emotional restoration',emoji:'🌿',color:'linear-gradient(135deg,#259848,#2fac55)',duration:7,
    days:[
      {day:1,ref:'Psalm 34:18',text:'"The LORD is close to the brokenhearted and saves those who are crushed in spirit."',reflection:'You are not alone in your pain. God draws near to the broken — especially you, right now. Let yourself be found by Him today.'},
      {day:2,ref:'Matthew 5:4',text:'"Blessed are those who mourn, for they will be comforted."',reflection:'Grief is not a sign of weak faith. Allow yourself to grieve honestly before God. His comfort is already on its way.'},
      {day:3,ref:'Psalm 30:5',text:'"Weeping may stay for the night, but rejoicing comes in the morning."',reflection:'Your current night will not last forever. Ask God today to give you a glimpse of the morning He is preparing for you.'},
      {day:4,ref:'Lamentations 3:22–23',text:'"His compassions never fail. They are new every morning."',reflection:'Every single morning is a fresh supply of mercy. Today is not yesterday. What new mercy can you receive this morning?'},
      {day:5,ref:'Isaiah 43:2',text:'"When you pass through the waters, I will be with you."',reflection:'God walks through the hard places with you — He doesn\'t remove them but sustains you within them. Where do you need to feel His presence today?'},
      {day:6,ref:'2 Corinthians 1:3–4',text:'"The God of all comfort, who comforts us in all our troubles."',reflection:'Your pain equips you to comfort others. Who in your life might need the comfort you\'ve received from God?'},
      {day:7,ref:'Revelation 21:4',text:'"He will wipe every tear from their eyes."',reflection:'There is a day coming when all sorrow ends forever. Let this eternal hope lift your eyes beyond the present pain.'}
    ]},
  {id:'gratitude5',title:'5 Days of Gratitude',desc:'Transform your perspective through intentional thanksgiving',emoji:'🙏',color:'linear-gradient(135deg,#b83027,#e53935)',duration:5,
    days:[
      {day:1,ref:'1 Thessalonians 5:18',text:'"Give thanks in all circumstances; for this is God\'s will for you."',reflection:'Write down 10 things you are grateful for right now. Start with the small ones — air, water, sunlight, another day.'},
      {day:2,ref:'Psalm 107:1',text:'"Give thanks to the LORD, for he is good; his love endures forever."',reflection:'His goodness and love are eternal — unaffected by your circumstances. Thank God today specifically for who He is, not just what He\'s done.'},
      {day:3,ref:'James 1:17',text:'"Every good and perfect gift is from above."',reflection:'Look around your life. Name the gifts — relationships, abilities, opportunities — and trace each one back to the Giver.'},
      {day:4,ref:'Colossians 3:17',text:'"Do it all... giving thanks to God the Father."',reflection:'Choose one ordinary task today and do it as an act of worship and thanksgiving. Let the mundane become sacred.'},
      {day:5,ref:'2 Corinthians 9:15',text:'"Thanks be to God for his indescribable gift!"',reflection:'Jesus is the ultimate gift. End this week meditating on the cross — the source from which all other blessings flow.'}
    ]}
];

/* ══════════════════════════════════════════
   STATE
══════════════════════════════════════════ */
let currentMood=null, currentIdx=0, isAnimating=false, touchStartX=0;
let focusTimerInterval=null, focusSeconds=0, focusRunning=false;
let currentFocusRef='', currentFocusText='';

/* ══════════════════════════════════════════
   STORAGE
══════════════════════════════════════════ */
function getFavs(){try{return JSON.parse(localStorage.getItem('bmm_favs')||'[]');}catch(e){return[];}}
function setFavs(f){localStorage.setItem('bmm_favs',JSON.stringify(f));}
function isFaved(ref){return getFavs().some(f=>f.ref===ref);}
function addFav(obj){const f=getFavs();if(!f.some(x=>x.ref===obj.ref)){f.push(obj);setFavs(f);}updateStats();}
function removeFav(ref){setFavs(getFavs().filter(f=>f.ref!==ref));updateStats();}
function getNote(ref){return localStorage.getItem('bmm_note_'+ref)||'';}
function saveNote(ref,txt){if(txt.trim())localStorage.setItem('bmm_note_'+ref,txt);else localStorage.removeItem('bmm_note_'+ref);}
function getPlanProgress(pid){try{return JSON.parse(localStorage.getItem('bmm_plan_'+pid)||'[]');}catch(e){return[];}}
function markDay(pid,day){const p=getPlanProgress(pid);if(!p.includes(day)){p.push(day);localStorage.setItem('bmm_plan_'+pid,JSON.stringify(p));}}
function unmarkDay(pid,day){const p=getPlanProgress(pid).filter(d=>d!==day);localStorage.setItem('bmm_plan_'+pid,JSON.stringify(p));}
function getStreak(){
  const today=new Date().toDateString();
  const last=localStorage.getItem('bmm_last');
  let streak=parseInt(localStorage.getItem('bmm_streak')||'0');
  if(last===today)return streak||1;
  const yest=new Date(Date.now()-86400000).toDateString();
  if(last===yest){streak=(streak||0)+1;}else{streak=1;}
  localStorage.setItem('bmm_streak',streak);
  localStorage.setItem('bmm_last',today);
  return streak;
}

/* ══════════════════════════════════════════
   HELPERS
══════════════════════════════════════════ */
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function ea(s){return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
function copyText(txt,btn){
  const orig=btn.innerHTML;
  const ok='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:11px;height:11px;"><polyline points="20 6 9 17 4 12"/></svg>Copied!';
  const done=()=>{btn.classList.add('ok');btn.innerHTML=ok;setTimeout(()=>{btn.classList.remove('ok');btn.innerHTML=orig;},2200);};
  if(navigator.clipboard){navigator.clipboard.writeText(txt).then(done).catch(done);}
  else{const t=document.createElement('textarea');t.value=txt;t.style.cssText='position:fixed;opacity:0';document.body.appendChild(t);t.select();document.execCommand('copy');document.body.removeChild(t);done();}
}
function shareText(txt){
  const full=txt+'\n\n— Bible Mood Matcher';
  if(navigator.share){navigator.share({title:'Bible Mood Matcher',text:full}).catch(()=>{});}
  else{navigator.clipboard.writeText(full).catch(()=>{});}
}
function updateStats(){
  const f=getFavs().length;
  document.getElementById('favsNum').textContent=f;
  document.getElementById('favCountLabel').textContent=f+' saved';
}

/* ══════════════════════════════════════════
   VIEWS
══════════════════════════════════════════ */
function showView(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.bni[data-view]').forEach(b=>b.classList.remove('active'));
  const bnMap={viewHome:'bnHome',viewPlans:'bnPlans',viewFavorites:'bnFav',viewContact:'bnContact'};
  if(bnMap[id])document.getElementById(bnMap[id]).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ══════════════════════════════════════════
   SEARCH
══════════════════════════════════════════ */
function doSearch(q){
  const box=document.getElementById('searchResults');
  if(!q||q.length<2){box.classList.remove('open');return;}
  const results=[];
  for(const[mk,m]of Object.entries(MOODS)){
    for(const v of m.verses){
      const qL=q.toLowerCase();
      const score=(v.ref.toLowerCase().includes(qL)?3:0)+(v.text.toLowerCase().includes(qL)?2:0)+(v.meaning.toLowerCase().includes(qL)?1:0)+((v.tags||[]).some(t=>t.toLowerCase().includes(qL))?1:0);
      if(score>0)results.push({...v,moodKey:mk,moodLabel:m.label,score});
    }
  }
  results.sort((a,b)=>b.score-a.score);
  if(!results.length){
    box.innerHTML='<div class="sr-empty">No verses found for "'+esc(q)+'". Try a different word.</div>';
    box.classList.add('open');return;
  }
  box.innerHTML=results.slice(0,7).map(r=>`
    <div class="sr-item" data-mood="${ea(r.moodKey)}" data-ref="${ea(r.ref)}">
      <div class="sr-ref">${esc(r.ref)} <span class="sr-mood-tag">• ${esc(r.moodLabel)}</span></div>
      <div class="sr-preview">${esc(r.text.replace(/["""]/g,''))}</div>
    </div>`).join('');
  box.classList.add('open');
  box.querySelectorAll('.sr-item').forEach(el=>{
    el.addEventListener('click',()=>{
      const mk=el.dataset.mood,ref=el.dataset.ref;
      renderMood(mk);
      const idx=MOODS[mk].verses.findIndex(v=>v.ref===ref);
      if(idx>0)setTimeout(()=>updateCarousel(idx,'next'),100);
      document.getElementById('searchInput').value='';
      box.classList.remove('open');
    });
  });
}
document.getElementById('searchInput').addEventListener('input',function(){doSearch(this.value.trim());});
document.addEventListener('click',e=>{if(!e.target.closest('.search-wrap'))document.getElementById('searchResults').classList.remove('open');});

/* ══════════════════════════════════════════
   DAILY VERSE
══════════════════════════════════════════ */
function initDailyVerse(){
  const doy=Math.floor((new Date()-new Date(new Date().getFullYear(),0,0))/86400000);
  const dv=DAILY_POOL[doy%DAILY_POOL.length];
  document.getElementById('votdText').textContent=dv.text;
  document.getElementById('votdRef').textContent=dv.ref;
  const opts={month:'long',day:'numeric',year:'numeric'};
  document.getElementById('votdDate').textContent=new Date().toLocaleDateString('en-US',opts);
  document.getElementById('votdCopy').addEventListener('click',function(){copyText(dv.ref+' '+dv.text,this);});
  document.getElementById('votdSave').addEventListener('click',function(){
    addFav({ref:dv.ref,text:dv.text,mood:'daily',accent:'#0f5c2e'});
    this.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" style="width:12px;height:12px"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>Saved!';
  });
  document.getElementById('votdFocus').addEventListener('click',()=>openFocus(dv.ref,dv.text));
}

/* ══════════════════════════════════════════
   CAROUSEL
══════════════════════════════════════════ */
function buildSlide(v,idx,mk){
  const m=MOODS[mk];
  const faved=isFaved(v.ref);
  const note=getNote(v.ref);
  return `<div class="c-slide" data-idx="${idx}">
    <div class="vc-card">
      <div class="vc-top">
        <div class="vc-ref"><span></span>${esc(v.ref)}</div>
        <div class="vc-text">${esc(v.text)}</div>
        <div class="vc-tags">${(v.tags||[]).map(t=>`<span class="vc-tag">${esc(t)}</span>`).join('')}</div>
      </div>
      <div class="vc-meaning">
        <button class="vc-meaning-toggle" aria-expanded="false">
          <div class="vc-m-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Verse Meaning &amp; Reflection</div>
          <svg class="vc-m-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="vc-m-body">
          <p>${esc(v.meaning)}</p>
          <div class="vc-context"><div class="vc-ctx-lbl">📖 Context</div>${esc(v.context)}</div>
        </div>
      </div>
      <div class="vc-note-area${note?' open':''}" id="note-${idx}">
        <textarea class="vc-note-textarea" data-ref="${ea(v.ref)}" placeholder="Write your personal reflection or prayer note here…">${esc(note)}</textarea>
        <div class="vc-note-saved" id="note-saved-${idx}"></div>
      </div>
      <div class="vc-actions">
        <button class="vbtn fav-btn${faved?' saved':''}" data-ref="${ea(v.ref)}" data-text="${ea(v.text)}" data-mood="${mk}" data-accent="${m.accent}">
          <svg viewBox="0 0 24 24" fill="${faved?'currentColor':'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>${faved?'Saved':'Save'}
        </button>
        <button class="vbtn copy-btn" data-text="${ea(v.ref+' '+v.text)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button>
        <button class="vbtn share-btn" data-text="${ea(v.ref+' '+v.text)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>Share</button>
        <button class="vbtn note-btn${note?' active':''}" data-idx="${idx}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>Note</button>
        <button class="vbtn" data-focusref="${ea(v.ref)}" data-focustxt="${ea(v.text)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M3 12h1M20 12h1M12 3v1M12 20v1"/></svg>Focus</button>
      </div>
    </div>
  </div>`;
}

function renderMood(key){
  const m=MOODS[key];if(!m)return;
  currentMood=key;currentIdx=0;
  const ban=document.getElementById('vbanner');
  ban.className='vbanner '+m.cls;
  document.getElementById('banImg').src=m.icon;
  document.getElementById('banImg').alt=m.label;
  document.getElementById('banTitle').textContent=m.label+' — God\'s Word for You';
  document.getElementById('banDesc').textContent=m.desc;
  document.getElementById('banBadge').textContent=m.verses.length+' Verses';
  document.getElementById('introQ').innerHTML='<strong>'+esc(m.label)+':</strong> '+esc(m.quote);
  const track=document.getElementById('cTrack');
  track.innerHTML=m.verses.map((v,i)=>buildSlide(v,i,key)).join('');
  // Events on slides
  track.querySelectorAll('.vc-meaning-toggle').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const body=btn.nextElementSibling,chev=btn.querySelector('.vc-m-chev');
      const open=body.classList.toggle('open');chev.classList.toggle('open',open);btn.setAttribute('aria-expanded',open);
    });
  });
  track.querySelectorAll('.fav-btn').forEach(btn=>btn.addEventListener('click',()=>toggleFav(btn)));
  track.querySelectorAll('.copy-btn').forEach(btn=>btn.addEventListener('click',()=>copyText(btn.dataset.text,btn)));
  track.querySelectorAll('.share-btn').forEach(btn=>btn.addEventListener('click',()=>shareText(btn.dataset.text)));
  track.querySelectorAll('.note-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const na=document.getElementById('note-'+btn.dataset.idx);
      na.classList.toggle('open');btn.classList.toggle('active',na.classList.contains('open'));
    });
  });
  track.querySelectorAll('.vc-note-textarea').forEach(ta=>{
    let ntimer;
    ta.addEventListener('input',function(){
      clearTimeout(ntimer);
      ntimer=setTimeout(()=>{
        saveNote(this.dataset.ref,this.value);
        const si=this.closest('.c-slide').dataset.idx;
        const ns=document.getElementById('note-saved-'+si);
        if(ns){ns.textContent='Note saved ✓';setTimeout(()=>ns.textContent='',1800);}
      },700);
    });
  });
  track.querySelectorAll('[data-focusref]').forEach(btn=>{
    btn.addEventListener('click',()=>openFocus(btn.dataset.focusref,btn.dataset.focustxt));
  });
  buildDots(m.verses.length);
  updateCarousel(0,null);
  showView('viewVerses');
}

function updateCarousel(newIdx,dir){
  const m=MOODS[currentMood];if(!m)return;
  const total=m.verses.length;
  const slides=document.querySelectorAll('.c-slide');
  slides.forEach(s=>{s.style.opacity='0';s.style.pointerEvents='none';s.style.transform='translateX(100%)';s.style.position='absolute';s.style.inset='0';s.style.zIndex='0';});
  const s=slides[newIdx];
  if(s){
    s.style.opacity='1';s.style.pointerEvents='auto';s.style.transform='translateX(0)';s.style.zIndex='1';
    if(dir){s.style.animation='none';void s.offsetHeight;s.style.animation=dir==='next'?'slideIR .36s cubic-bezier(.4,0,.2,1) both':'slideIL .36s cubic-bezier(.4,0,.2,1) both';}
  }
  document.getElementById('cFill').style.width=((newIdx+1)/total*100)+'%';
  document.getElementById('cText').textContent=(newIdx+1)+' / '+total;
  document.querySelectorAll('.c-dot').forEach((d,i)=>d.classList.toggle('active',i===newIdx));
  document.getElementById('cPrev').disabled=newIdx===0;
  document.getElementById('cNext').disabled=newIdx===total-1;
  currentIdx=newIdx;
  // Update focus btn
  const cv=m.verses[newIdx];
  if(cv){currentFocusRef=cv.ref;currentFocusText=cv.text;}
}
function buildDots(count){
  const dots=document.getElementById('cDots');dots.innerHTML='';
  for(let i=0;i<count;i++){const d=document.createElement('button');d.className='c-dot'+(i===0?' active':'');d.setAttribute('aria-label','Verse '+(i+1));d.addEventListener('click',()=>{if(!isAnimating)updateCarousel(i,i>currentIdx?'next':'prev');});dots.appendChild(d);}
}
function goNext(){if(!currentMood||isAnimating)return;const t=MOODS[currentMood].verses.length;if(currentIdx<t-1){isAnimating=true;updateCarousel(currentIdx+1,'next');setTimeout(()=>isAnimating=false,400);}}
function goPrev(){if(!currentMood||isAnimating)return;if(currentIdx>0){isAnimating=true;updateCarousel(currentIdx-1,'prev');setTimeout(()=>isAnimating=false,400);}}

/* ══════════════════════════════════════════
   FOCUS MODE
══════════════════════════════════════════ */
function openFocus(ref,text){
  currentFocusRef=ref;currentFocusText=text;
  document.getElementById('focusVerse').textContent=text;
  document.getElementById('focusRef').textContent=ref;
  resetTimer();
  document.getElementById('focusOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeFocus(){
  document.getElementById('focusOverlay').classList.remove('open');
  document.body.style.overflow='';
  stopTimer();
}
function copyFocusVerse(){
  const txt=currentFocusRef+' '+currentFocusText;
  if(navigator.clipboard)navigator.clipboard.writeText(txt).catch(()=>{});
  const btn=event.target.closest('button');
  if(btn){const o=btn.textContent;btn.textContent='Copied!';setTimeout(()=>btn.textContent=o,2000);}
}
function formatTime(s){const m=Math.floor(s/60),sec=s%60;return m+':'+(sec<10?'0':'')+sec;}
function resetTimer(){focusSeconds=0;focusRunning=false;clearInterval(focusTimerInterval);document.getElementById('focusTimer').textContent='0:00';document.getElementById('focusTimerToggle').textContent='Start Timer';}
function stopTimer(){focusRunning=false;clearInterval(focusTimerInterval);}
document.getElementById('focusTimerToggle').addEventListener('click',function(){
  if(focusRunning){stopTimer();this.textContent='Resume Timer';}
  else{focusRunning=true;this.textContent='Pause Timer';focusTimerInterval=setInterval(()=>{focusSeconds++;document.getElementById('focusTimer').textContent=formatTime(focusSeconds);},1000);}
});
document.getElementById('focusAmen').addEventListener('click',closeFocus);
document.getElementById('focusClose').addEventListener('click',closeFocus);

/* Focus from verse view header */
document.getElementById('focusBtn').addEventListener('click',()=>{
  if(currentMood&&MOODS[currentMood]){
    const v=MOODS[currentMood].verses[currentIdx];
    if(v)openFocus(v.ref,v.text);
  }
});

/* ══════════════════════════════════════════
   FAVORITES
══════════════════════════════════════════ */
function toggleFav(btn){
  const{ref,text,mood,accent}=btn.dataset;
  if(isFaved(ref)){
    removeFav(ref);btn.classList.remove('saved');
    btn.querySelector('svg').setAttribute('fill','none');
    btn.lastChild.textContent='Save';
  }else{
    addFav({ref,text,mood,accent});btn.classList.add('saved');
    btn.querySelector('svg').setAttribute('fill','currentColor');
    btn.lastChild.textContent='Saved';
  }
}
function renderFavorites(){
  updateStats();
  const favs=getFavs();
  const list=document.getElementById('favList');
  if(!favs.length){
    list.innerHTML=`<div class="fav-empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg><h3>No Saved Verses Yet</h3><p>Tap the heart icon on any verse to save it here for easy access later.</p></div>`;
    return;
  }
  list.innerHTML=favs.map((f,i)=>{
    const note=getNote(f.ref);
    return`<div class="fav-card" style="border-left-color:${esc(f.accent||'#3aaa5a')};animation-delay:${i*.05}s">
      <div class="fav-card-meta">
        <span class="fav-card-ref">${esc(f.ref)}</span>
        ${f.mood&&f.mood!=='daily'&&MOODS[f.mood]?`<span class="fav-mood-tag" style="background:${esc(MOODS[f.mood].accent||'#edf7f0')}22;color:${esc(MOODS[f.mood].accent||'#3aaa5a')}">${esc(MOODS[f.mood].label)}</span>`:''}
      </div>
      <div class="fav-card-text">${esc(f.text)}</div>
      ${note?`<div class="fav-card-note visible"><strong>My Note:</strong> ${esc(note)}</div>`:''}
      <div class="fav-actions">
        <button class="fav-copy-btn" data-text="${ea(f.ref+' '+f.text)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button>
        <button class="fav-focus-btn" data-ref="${ea(f.ref)}" data-text="${ea(f.text)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M3 12h1M20 12h1M12 3v1M12 20v1"/></svg>Focus</button>
        <button class="fav-remove-btn" data-ref="${ea(f.ref)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>Remove</button>
      </div>
    </div>`;
  }).join('');
  list.querySelectorAll('.fav-copy-btn').forEach(b=>b.addEventListener('click',()=>copyText(b.dataset.text,b)));
  list.querySelectorAll('.fav-remove-btn').forEach(b=>b.addEventListener('click',()=>{removeFav(b.dataset.ref);renderFavorites();}));
  list.querySelectorAll('.fav-focus-btn').forEach(b=>b.addEventListener('click',()=>openFocus(b.dataset.ref,b.dataset.text)));
}

/* Save All */
document.getElementById('saveAllBtn').addEventListener('click',function(){
  if(!currentMood)return;
  MOODS[currentMood].verses.forEach(v=>addFav({ref:v.ref,text:v.text,mood:currentMood,accent:MOODS[currentMood].accent}));
  this.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" style="width:13px;height:13px"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>All Saved!';
  updateStats();
});

/* ══════════════════════════════════════════
   READING PLANS
══════════════════════════════════════════ */
function renderPlans(){
  document.getElementById('plansMain').style.display='';
  document.getElementById('planDetail').style.display='none';
  const grid=document.getElementById('plansGrid');
  grid.innerHTML=PLANS.map((p,i)=>{
    const done=getPlanProgress(p.id).length;
    return`<div class="plan-card" data-pid="${ea(p.id)}" style="animation-delay:${i*.06}s">
      <div class="plan-card-top" style="background:${p.color}">
        <span class="plan-emoji">${p.emoji}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.desc)}</p>
      </div>
      <div class="plan-card-bot">
        <span class="plan-duration">${p.duration} days</span>
        <span class="plan-progress-txt">${done}/${p.days.length} done</span>
        <span class="plan-start-btn">${done===0?'Start':'Continue'}</span>
      </div>
    </div>`;
  }).join('');
  grid.querySelectorAll('.plan-card').forEach(c=>c.addEventListener('click',()=>openPlan(c.dataset.pid)));
}
function openPlan(pid){
  const plan=PLANS.find(p=>p.id===pid);if(!plan)return;
  document.getElementById('plansMain').style.display='none';
  document.getElementById('planDetail').style.display='';
  const done=getPlanProgress(pid);
  const dl=document.getElementById('planDayList');
  dl.innerHTML=`<div style="padding:0 0 8px"><div class="plans-hdr" style="border-radius:16px;margin:0 0 16px"><h2>${esc(plan.emoji+' '+plan.title)}</h2><p>${esc(plan.desc)}</p></div></div>`+
  plan.days.map(d=>{
    const isDone=done.includes(d.day);
    return`<div class="plan-day-card${isDone?' done':''}" id="pday-${pid}-${d.day}">
      <div class="plan-day-header">
        <div class="plan-day-num">Day ${d.day}</div>
        <button class="plan-day-check${isDone?' done':''}" data-pid="${ea(pid)}" data-day="${d.day}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          ${isDone?'Completed':'Mark as Read'}
        </button>
      </div>
      <div class="plan-day-ref">${esc(d.ref)}</div>
      <div class="plan-day-text">${esc(d.text)}</div>
      <div class="plan-day-reflection">${esc(d.reflection)}</div>
    </div>`;
  }).join('');
  dl.querySelectorAll('.plan-day-check').forEach(btn=>{
    btn.addEventListener('click',function(){
      const{pid:p,day:dy}=this.dataset;const dayNum=parseInt(dy);
      const prog=getPlanProgress(p);
      if(prog.includes(dayNum)){unmarkDay(p,dayNum);this.classList.remove('done');this.lastChild.textContent='Mark as Read';this.closest('.plan-day-card').classList.remove('done');}
      else{markDay(p,dayNum);this.classList.add('done');this.lastChild.textContent='Completed';this.closest('.plan-day-card').classList.add('done');}
    });
  });
}
document.getElementById('planBackBtn').addEventListener('click',renderPlans);

/* ══════════════════════════════════════════
   CONTACT — FormSubmit.co
══════════════════════════════════════════ */
document.getElementById('submitBtn').addEventListener('click',async function(){
  const name=document.getElementById('fName').value.trim();
  const email=document.getElementById('fEmail').value.trim();
  const message=document.getElementById('fMessage').value.trim();
  const subject=document.getElementById('fSubject').value;
  const errEl=document.getElementById('formError');
  errEl.classList.remove('visible');
  if(!name||!email||!message){errEl.classList.add('visible');return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){errEl.textContent='Please enter a valid email address.';errEl.classList.add('visible');return;}
  this.disabled=true;this.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;animation:spin 1s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>Sending…';
  try{
    const res=await fetch('https://formsubmit.co/ajax/henokbirhanu614@gmail.com',{
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({name:name+' '+(document.getElementById('fLast').value.trim()),email,subject:'[Bible Mood Matcher] '+subject,message,'_subject':'Bible Mood Matcher Contact: '+subject,'_captcha':'false'})
    });
    const data=await res.json();
    if(data.success==='true'||data.success===true){
      document.getElementById('thankEmail').textContent=email;
      document.getElementById('contactFormBody').style.display='none';
      document.getElementById('formThanks').style.display='block';
    }else{throw new Error('Send failed');}
  }catch(e){
    errEl.textContent='Something went wrong. Please try again or email us directly at henokbirhanu614@gmail.com';
    errEl.classList.add('visible');
    this.disabled=false;
    this.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>Try Again';
  }
});

/* ══════════════════════════════════════════
   EVENTS
══════════════════════════════════════════ */
document.getElementById('moodsGrid').addEventListener('click',e=>{const b=e.target.closest('[data-mood]');if(b)renderMood(b.dataset.mood);});
document.getElementById('backBtn').addEventListener('click',()=>showView('viewHome'));
document.getElementById('logoHome').addEventListener('click',()=>showView('viewHome'));
document.querySelectorAll('.bni[data-view]').forEach(b=>{
  b.addEventListener('click',()=>{
    const v=b.dataset.view;
    if(v==='viewFavorites')renderFavorites();
    if(v==='viewPlans')renderPlans();
    showView(v);
  });
});
document.getElementById('bnAbout').addEventListener('click',()=>document.getElementById('overlay').classList.add('open'));
document.getElementById('mClose').addEventListener('click',()=>document.getElementById('overlay').classList.remove('open'));
document.getElementById('overlay').addEventListener('click',e=>{if(e.target===document.getElementById('overlay'))document.getElementById('overlay').classList.remove('open');});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){document.getElementById('overlay').classList.remove('open');closeFocus();}
  if(document.getElementById('viewVerses').classList.contains('active')){
    if(e.key==='ArrowRight')goNext();
    if(e.key==='ArrowLeft')goPrev();
  }
});
document.getElementById('cPrev').addEventListener('click',goPrev);
document.getElementById('cNext').addEventListener('click',goNext);
// Touch swipe
const track=document.getElementById('cTrack');
track.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].clientX;},{passive:true});
track.addEventListener('touchend',e=>{const d=touchStartX-e.changedTouches[0].clientX;if(Math.abs(d)>50)d>0?goNext():goPrev();});
window.addEventListener('scroll',()=>document.getElementById('stt').classList.toggle('vis',window.scrollY>260));
document.getElementById('stt').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* Add spin animation */
const styleEl=document.createElement('style');
styleEl.textContent='@keyframes spin{to{transform:rotate(360deg);}}';
document.head.appendChild(styleEl);

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
initDailyVerse();
document.getElementById('streakNum').textContent=getStreak();
updateStats();
