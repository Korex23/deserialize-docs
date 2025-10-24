"use client";

import React, { useState } from "react";
import Section from "@/components/Section";
import Endpoint from "@/components/Endpoints";
import CodeBlock from "@/components/Codeblocks";

export default function TokenScreenerPools() {
  const samplePoolsList = `{
  "success": true,
  "data": [
    {
      "poolAddress": "0xe590C6E04F198B0cf0f2F6f84ca3C760E5817C44",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x7bBC63D01CA42491c3E084C941c3E86e55951404",
      "fee": 10000,
      "liquidity": "74611883362805384229934",
      "sqrtPriceX96": "75727653163298763027345513086",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6395774",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0x18baD16195276C998E7c4637857532730C651D76",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x7bBC63D01CA42491c3E084C941c3E86e55951404",
      "fee": 3000,
      "liquidity": "4277157393215804192022744",
      "sqrtPriceX96": "75590662147085448749379651089",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6397682",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xB875d24BA0da494FF8174d1f50671eEa7eD7aCe1",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x2C81a9883f9570266Ab734a9671412e72e7a615d",
      "fee": 10000,
      "liquidity": "0",
      "sqrtPriceX96": "1304931134848843265459731065",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6398904",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0x90d64123C8a6B46DC4B7D8b0AA0425531CDdc61C",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0xF699327144a53AD6556BCd8fD745bA693EB59777",
      "fee": 10000,
      "liquidity": "340998437650631317494403",
      "sqrtPriceX96": "153891117877280200183574668925486",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6399250",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xb15829ec0456F1c1C31fe26F747C3572276a655f",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x48429B5Dd3624a2d954CF9b7bb27A442f30dD8a4",
      "fee": 10000,
      "liquidity": "0",
      "sqrtPriceX96": "24540284298320564813877940589712",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6399816",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xe041895871a0116f86641d6120Ae42B0c0DdE1D6",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x9CC1d782E6dfe5936204c3295cb430e641DcF300",
      "fee": 3000,
      "liquidity": "0",
      "sqrtPriceX96": "4295128740",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6400392",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0x752827B0b586E510c4eE0C7bD6795fd9C931351e",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x9384EA4650376173B3c1E2D42Ea69F56Fd9a4427",
      "fee": 10000,
      "liquidity": "0",
      "sqrtPriceX96": "23880213105227169283689993647707",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6400826",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xC1F8663Ee1b1116DC21b4B79fCd555ccaEf28455",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0xD48f6363b9854D7e847aaE3288aA422F7EF82d67",
      "fee": 100,
      "liquidity": "0",
      "sqrtPriceX96": "24581410839614026025676295940196",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6401188",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xf9E74DCD49292d9536Bfd7AB37F39dF6663E9B4F",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0xF8b1856952c0d276c9AB774Bf54940B58349E528",
      "fee": 10000,
      "liquidity": "0",
      "sqrtPriceX96": "4295128740",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6401665",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xb8A06119CF53B1b5b6329D3B88856b6abfA8BD08",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x1dD33199E396287E8861632F01C9fd13E241DBA2",
      "fee": 3000,
      "liquidity": "0",
      "sqrtPriceX96": "2024129119022334036481202088",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6401959",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0x9851711E9F9d5e4f5959daD835556c0BfbdB0e63",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x59f4Ff75aB76378B0c9EC957e0dE694a8B9B877D",
      "fee": 3000,
      "liquidity": "3162278705233114572",
      "sqrtPriceX96": "2455801537814938541574195523609",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6404258",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xB022c2fF7e29fDe86e367787147f2F8b1e3dFD4f",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x9CC1d782E6dfe5936204c3295cb430e641DcF300",
      "fee": 10000,
      "liquidity": "0",
      "sqrtPriceX96": "79228162514264337593543950336",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6408062",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0x723D5a594AAFaF92e7C3b36Be04E92e5E71fe4C1",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x7bBC63D01CA42491c3E084C941c3E86e55951404",
      "fee": 100,
      "liquidity": "7109765262360403034",
      "sqrtPriceX96": "75608693975241494686373842124",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6408539",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0x5B8C2a59b4350017baaea9492b73e0BF091E2ec7",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x7bBC63D01CA42491c3E084C941c3E86e55951404",
      "fee": 500,
      "liquidity": "22707903475451491625669",
      "sqrtPriceX96": "75498040325321494252952688736",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6409836",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xE23160A2D27a4519D9bfBC39ED2B6bD3A4Ed882B",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x7a9251B206E58EcBb6CD15e374e18C63430B987f",
      "fee": 3000,
      "liquidity": "3162278705233114572",
      "sqrtPriceX96": "1518484183509999645409801594755",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6414656",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xACcf50D82E4cdfAF250DEa8FDC2AFEDde6dbCeA1",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0xbf557f06BAEC49C3d3012918117c3EA249882217",
      "fee": 3000,
      "liquidity": "0",
      "sqrtPriceX96": "7825284910501149084708509184391109",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6417197",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xE124FE7e72B26fcd030eE29B25e973eA1c173C91",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x76D51BA285A3dbC0108C605B06D663B9b15298E1",
      "fee": 3000,
      "liquidity": "0",
      "sqrtPriceX96": "4295128740",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6467537",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xFdA75182A43Ec6D5E916D25E7A9aF7341822f693",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0xcb57c1cB944F8de6885Ba7884434807fc58dCa4B",
      "fee": 3000,
      "liquidity": "0",
      "sqrtPriceX96": "7204521924464866944750533276019",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6469880",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0x1F53358c995952C87a6c7c82600F0dfBE1Bfd24f",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0xcb57c1cB944F8de6885Ba7884434807fc58dCa4B",
      "fee": 500,
      "liquidity": "214483110581810815250717",
      "sqrtPriceX96": "792241315848772984020529899307812",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6471320",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0x224D0891D63Ca83e6DD98B4653C27034503a5E76",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x59ef6F3943bBdFE2fB19565037Ac85071223E94C",
      "fee": 3000,
      "liquidity": "22590832978972587928",
      "sqrtPriceX96": "130820833955094437199162893",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6514778",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0x2790A4Aa437f792CE1A6b73d4bb85c26D6F26B73",
      "token0": "0x14E351a40b757C6255e11e7FcadB9CBb34E6e30A",
      "token1": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "fee": 3000,
      "liquidity": "14999999999999999998",
      "sqrtPriceX96": "42571349732902961391327",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6559626",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xad93717fAC166159913280cE46ba49D717F5Fb41",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x31f301B3478B4dFa44D106B3CAf9bC065D86fD87",
      "fee": 10000,
      "liquidity": "0",
      "sqrtPriceX96": "1109070771266663550964985219573499",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6590120",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0x3D6c315511bC5c0DE4d6b51562608C36e86E9Aa6",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x59ef6F3943bBdFE2fB19565037Ac85071223E94C",
      "fee": 500,
      "liquidity": "1443238277371088",
      "sqrtPriceX96": "131973605553688486246620815",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6651028",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xa9e824Eddb9677fB2189AB9c439238A83695C091",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x1f3AA82227281cA364bFb3d253B0f1af1Da6473E",
      "fee": 3000,
      "liquidity": "295984647013006077",
      "sqrtPriceX96": "105633039164915590654424",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6705060",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xf26E7011FF3bc0D8eB1fE968f9B24c85177e35Fd",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x98CB9E5d0C7Baa31A8aB7DF2F1cb9BA7981C4ba0",
      "fee": 3000,
      "liquidity": "3162273828267359203750732",
      "sqrtPriceX96": "24045074120912313744397729235743071",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6995855",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xCAc70175587303D90780588C28697E60fceB110A",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x285F0100A8Ff2Ff81bFB020d7239C3323Aa20021",
      "fee": 3000,
      "liquidity": "16854480321008745259",
      "sqrtPriceX96": "4689311778022972304942996398896",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "8928326",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0xe957467eCC56a0E5009059ae3F8D597176E38C53",
      "token0": "0x1C9B800b253b8C37cF0c3A169D593a510De7F083",
      "token1": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "fee": 3000,
      "liquidity": "16854480321008745259",
      "sqrtPriceX96": "1338597651963573510633838679",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "8991288",
      "lastUpdated": 1761222454166
    },
    {
      "poolAddress": "0x6C9f210231bAb2865dF09a36b8d5161299595193",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x4ba0649B9bcd625cF8333dbc78432ab4f0423abb",
      "fee": 3000,
      "liquidity": "16983742869753098473",
      "sqrtPriceX96": "4642094312941546418157179719857",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "9880497",
      "lastUpdated": 1761222454166
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 37,
    "totalPages": 1,
    "hasNext": false,
    "hasPrev": false
  }
}`;

  const samplePoolDetails = `{
  "success": false,
  "error": "[\\n  {\\n    \\"origin\\": \\"string\\",\\n    \\"code\\": \\"invalid_format\\",\\n    \\"format\\": \\"regex\\",\\n    \\"pattern\\": \\"/^0x[a-fA-F0-9]{40}$/\\",\\n    \\"path\\": [\\n      \\"address\\"\\n    ],\\n    \\"message\\": \\"Invalid pool address\\"\\n  }\\n]"
  }`;
  
  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);
  const copyToClipboard = (code: string, index: string | number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="prose max-w-none w-full overflow-x-hidden">
      <h1>Pools</h1>

      <Section id="pools-list" title="Pools List">
        <Endpoint method="GET" path="/pools" />
        <p>Returns a paginated list of pools and metrics.</p>
        <CodeBlock
          index="pools-list"
          language="json"
          code={samplePoolsList}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>

      <Section id="pool-details" title="Pool Details">
        <Endpoint method="GET" path="/pools/:address" />
        <p>Retrieve specific pool details by pool address.</p>
        <CodeBlock
          index="pool-details"
          language="json"
          code={samplePoolDetails}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>
    </div>
  );
}