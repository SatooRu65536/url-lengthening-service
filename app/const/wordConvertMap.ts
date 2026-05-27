export const WORD_CONVRT_MAP: Record<string, string> = {
  // lowercase
  'a': 'adelie', // アデリーペンギン
  'b': 'banded', // 縞模様の
  'c': 'chinstrap', // ヒゲペンギン
  'd': 'dusky', // 暗色の
  'e': 'emperor', // コウテイペンギン
  'f': 'fiordland', // フィヨルドランドペンギン
  'g': 'gentoo', // ジェンツーペンギン
  'h': 'humboldt', // フンボルトペンギン
  'i': 'iceberg', // 氷山
  'j': 'jackass', // ケープペンギンの別名
  'k': 'king', // オウサマペンギン
  'l': 'little', // コガタペンギン
  'm': 'magellanic', // マゼランペンギン
  'n': 'nesting', // 巣作りする
  'o': 'ornate', // 飾り羽のある
  'p': 'penguin', // ペンギン
  'q': 'quill', // 羽軸
  'r': 'rockhopper', // イワトビペンギン
  's': 'snares', // スネアーズペンギン
  't': 'tuxedo', // タキシード模様
  'u': 'underwater', // 水中の
  'v': 'vocal', // 鳴き声を出す
  'w': 'waddling', // よちよち歩き
  'x': 'xenic', // 外来性の
  'y': 'yelloweyed', // キガシラペンギン
  'z': 'zippy', // 素早い

  // uppercase
  'A': 'african', // アフリカペンギン
  'B': 'blue', // 青い（ブルーペンギン由来）
  'C': 'cute', // かわいい
  'D': 'diving', // 潜水する
  'E': 'erectcrested', // キマユペンギン
  'F': 'flipper', // フリッパー
  'G': 'galapagos', // ガラパゴスペンギン
  'H': 'hunter', // 狩りをする
  'I': 'ice', // 氷
  'J': 'jumper', // 飛び跳ねるもの
  'K': 'krill', // オキアミ
  'L': 'lovely', // 可愛らしい
  'M': 'macaroni', // マカロニペンギン
  'N': 'noisy', // 騒がしい
  'O': 'oceanic', // 海洋性の
  'P': 'polar', // 極地の
  'Q': 'quick', // 素早い
  'R': 'royal', // ロイヤルペンギン
  'S': 'satooru',
  'T': 'torpedo', // 魚雷型の
  'U': 'upright', // 直立した
  'V': 'very', // とても
  'W': 'winter', // 冬の
  'X': 'xanthic', // 黄色変種の
  'Y': 'young', // 若い
  'Z': 'zooplankton', // 動物プランクトン

  // numbers
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',

  // symbols
  '+': 'colony', // ペンギンの群れ
  '/': 'antarctic', // 南極の
  '=': 'is', // Be動詞
};

// WORD_CONVRT_MAP を反転させたマップを作成
export const REVERSE_WORD_CONVRT_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(WORD_CONVRT_MAP).map(([key, value]) => [value, key]),
);
