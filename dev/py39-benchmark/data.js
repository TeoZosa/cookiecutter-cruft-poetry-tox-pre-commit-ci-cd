window.BENCHMARK_DATA = {
  "lastUpdate": 1621714836864,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d26b5804c9b37bfa4d28a8aa9ba276247ef277a",
          "message": "Merge pull request #96 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.5",
          "timestamp": "2021-03-04T14:23:36Z",
          "tree_id": "b1f9c41345508fab2d64b17dec665c583c4cce01",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/1d26b5804c9b37bfa4d28a8aa9ba276247ef277a"
        },
        "date": 1614868076463,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14401.688135004993,
            "unit": "iter/sec",
            "range": "stddev: 0.00008200404564376344",
            "extra": "mean: 69.43630431556024 usec\nrounds: 12165"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4129490.8814883195,
            "unit": "iter/sec",
            "range": "stddev: 2.9457543710324346e-8",
            "extra": "mean: 242.16060252898865 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13564.306055143958,
            "unit": "iter/sec",
            "range": "stddev: 0.000015824728941336613",
            "extra": "mean: 73.72290155756052 usec\nrounds: 9183"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 129401.45217540771,
            "unit": "iter/sec",
            "range": "stddev: 9.70244852571694e-7",
            "extra": "mean: 7.727888545210983 usec\nrounds: 37172"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15551.797933066982,
            "unit": "iter/sec",
            "range": "stddev: 0.00002430268944208544",
            "extra": "mean: 64.30124698789662 usec\nrounds: 13280"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4123294.1003990388,
            "unit": "iter/sec",
            "range": "stddev: 3.237206152742884e-8",
            "extra": "mean: 242.52453879102987 nsec\nrounds: 175408"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "b727aa006df911ba44a8dfcc53743544e5433ea9",
          "message": ":art: Move misc. helper targets to correct section",
          "timestamp": "2021-03-05T10:38:03-08:00",
          "tree_id": "c89af77c6c48bc9a22e63d0b0592e1ccaaef06a6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/b727aa006df911ba44a8dfcc53743544e5433ea9"
        },
        "date": 1614969734122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15282.373442220354,
            "unit": "iter/sec",
            "range": "stddev: 0.000006892002257760537",
            "extra": "mean: 65.4348621816371 usec\nrounds: 12531"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4179707.5287934393,
            "unit": "iter/sec",
            "range": "stddev: 5.269278349938268e-8",
            "extra": "mean: 239.25118997225792 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13351.219953933505,
            "unit": "iter/sec",
            "range": "stddev: 0.00001899565639018246",
            "extra": "mean: 74.89952254927704 usec\nrounds: 5477"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 134042.71617916218,
            "unit": "iter/sec",
            "range": "stddev: 0.000001556589263775596",
            "extra": "mean: 7.4603083890317095 usec\nrounds: 33221"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14996.6040254906,
            "unit": "iter/sec",
            "range": "stddev: 0.000010716055647258657",
            "extra": "mean: 66.6817633045616 usec\nrounds: 13642"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4145277.4036201835,
            "unit": "iter/sec",
            "range": "stddev: 4.7695216790622645e-8",
            "extra": "mean: 241.23837867297476 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "43f641705c0fe2b71e45253aeeb0daea49ec9622",
          "message": ":art: Move misc. helper targets to correct section",
          "timestamp": "2021-03-05T10:41:29-08:00",
          "tree_id": "d50943b741f62b36471efd689b1411e17dd43e76",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/43f641705c0fe2b71e45253aeeb0daea49ec9622"
        },
        "date": 1614970270605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 12331.124450586885,
            "unit": "iter/sec",
            "range": "stddev: 0.00007337917939896627",
            "extra": "mean: 81.09560519052309 usec\nrounds: 1811"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3609962.549502701,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010625592067286131",
            "extra": "mean: 277.01118399065416 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11571.052448708717,
            "unit": "iter/sec",
            "range": "stddev: 0.00010332093259778127",
            "extra": "mean: 86.42256220276627 usec\nrounds: 7154"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 115168.53779387935,
            "unit": "iter/sec",
            "range": "stddev: 0.000006375192189187492",
            "extra": "mean: 8.68292694476794 usec\nrounds: 41667"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14569.949549850857,
            "unit": "iter/sec",
            "range": "stddev: 0.00006634526661886666",
            "extra": "mean: 68.63441747540136 usec\nrounds: 9579"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2266914.021188678,
            "unit": "iter/sec",
            "range": "stddev: 9.274142695667135e-7",
            "extra": "mean: 441.1283315789985 nsec\nrounds: 58824"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "6942ae2e70eb498e795c8b8436ba16726b51383c",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-03-05T11:26:35-08:00",
          "tree_id": "33507d332ee57eec0a74f55c4f369ebd4476bca4",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/6942ae2e70eb498e795c8b8436ba16726b51383c"
        },
        "date": 1614972654467,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14445.027798899648,
            "unit": "iter/sec",
            "range": "stddev: 0.00006819965943725377",
            "extra": "mean: 69.22797338445933 usec\nrounds: 11835"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3978033.993796264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020837164026321738",
            "extra": "mean: 251.38045616509973 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12148.176364324825,
            "unit": "iter/sec",
            "range": "stddev: 0.00006984113384786179",
            "extra": "mean: 82.3168819755259 usec\nrounds: 7795"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 120235.40836145429,
            "unit": "iter/sec",
            "range": "stddev: 0.000010854921391922101",
            "extra": "mean: 8.317017537743777 usec\nrounds: 32786"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14700.466240010317,
            "unit": "iter/sec",
            "range": "stddev: 0.00008878199717778292",
            "extra": "mean: 68.02505333322668 usec\nrounds: 10800"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3869494.393472673,
            "unit": "iter/sec",
            "range": "stddev: 4.1976939074771613e-7",
            "extra": "mean: 258.4316963184824 nsec\nrounds: 178572"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4eb3f1eabd1beea7f5ee9657dc53bd829a750b0b",
          "message": "Merge pull request #104 from TeoZosa/dependabot/pip/sphinx-3.5.2",
          "timestamp": "2021-03-08T14:12:41Z",
          "tree_id": "6ace55a4378ca07acb4cce445b353778b4ebb7ff",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/4eb3f1eabd1beea7f5ee9657dc53bd829a750b0b"
        },
        "date": 1615213000510,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14330.947152098179,
            "unit": "iter/sec",
            "range": "stddev: 0.0000946699741403228",
            "extra": "mean: 69.77905852186407 usec\nrounds: 9364"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4107681.71907604,
            "unit": "iter/sec",
            "range": "stddev: 9.909060650618192e-7",
            "extra": "mean: 243.4463204283178 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12704.018711000552,
            "unit": "iter/sec",
            "range": "stddev: 0.00003249131256430189",
            "extra": "mean: 78.7152493040717 usec\nrounds: 8985"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 130381.27683388459,
            "unit": "iter/sec",
            "range": "stddev: 0.0000186121980875066",
            "extra": "mean: 7.669812907830885 usec\nrounds: 49505"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14214.59957210794,
            "unit": "iter/sec",
            "range": "stddev: 0.0001421995573971845",
            "extra": "mean: 70.3502054297901 usec\nrounds: 9872"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4339202.462028144,
            "unit": "iter/sec",
            "range": "stddev: 3.0933419836706857e-7",
            "extra": "mean: 230.4570963791685 nsec\nrounds: 166667"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc89c991b4b3f52ba42eb2f0d477cb2e99137ba3",
          "message": "Merge pull request #105 from TeoZosa/dependabot/pip/pygments-2.8.1",
          "timestamp": "2021-03-08T14:21:26Z",
          "tree_id": "3d137e0a667b16cbe76a25aaa251c59fb9f7065e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/bc89c991b4b3f52ba42eb2f0d477cb2e99137ba3"
        },
        "date": 1615213524692,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15713.9889369326,
            "unit": "iter/sec",
            "range": "stddev: 0.000018249493759025546",
            "extra": "mean: 63.637565484706386 usec\nrounds: 11224"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4317338.181299419,
            "unit": "iter/sec",
            "range": "stddev: 3.639658272440495e-7",
            "extra": "mean: 231.62419945020702 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12592.328569049323,
            "unit": "iter/sec",
            "range": "stddev: 0.00012545889973322784",
            "extra": "mean: 79.41342973355218 usec\nrounds: 8482"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 138968.33586602946,
            "unit": "iter/sec",
            "range": "stddev: 0.000007821619157587337",
            "extra": "mean: 7.195883823233204 usec\nrounds: 39526"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15883.819967435233,
            "unit": "iter/sec",
            "range": "stddev: 0.00003152667641514975",
            "extra": "mean: 62.957147716996595 usec\nrounds: 13228"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4315028.848272361,
            "unit": "iter/sec",
            "range": "stddev: 5.2695548042312756e-8",
            "extra": "mean: 231.74816094215362 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f4f459e5f2c721ce335282a902690ed6bb5710d6",
          "message": "Merge pull request #79 from TeoZosa/dependabot/pip/mypy-0.812\n\n⬆️ Bump mypy from 0.800 to 0.812",
          "timestamp": "2021-03-30T18:27:34-07:00",
          "tree_id": "f0e5ee8e309bfee83f8c87252c9c85680bf2b737",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/f4f459e5f2c721ce335282a902690ed6bb5710d6"
        },
        "date": 1617154309182,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15176.644389565008,
            "unit": "iter/sec",
            "range": "stddev: 0.00002101299953432001",
            "extra": "mean: 65.89071828602437 usec\nrounds: 12392"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4691324.689296331,
            "unit": "iter/sec",
            "range": "stddev: 1.8085501670488953e-7",
            "extra": "mean: 213.1594093841713 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12360.422325042968,
            "unit": "iter/sec",
            "range": "stddev: 0.00005776535431596457",
            "extra": "mean: 80.90338450442258 usec\nrounds: 6892"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 136977.724104849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061860333357532216",
            "extra": "mean: 7.300457111074165 usec\nrounds: 48544"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14938.233839274124,
            "unit": "iter/sec",
            "range": "stddev: 0.000015533137759678697",
            "extra": "mean: 66.94231799818927 usec\nrounds: 5956"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4393688.638423364,
            "unit": "iter/sec",
            "range": "stddev: 2.286553705106069e-7",
            "extra": "mean: 227.59919564056722 nsec\nrounds: 161291"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "027a8068f4473dce4edee09207d658e0d8b302fd",
          "message": "Merge pull request #99 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.1.0\n\n⬆️ Bump JamesIves/github-pages-deploy-action from 4.0.0 to 4.1.0",
          "timestamp": "2021-03-30T18:27:53-07:00",
          "tree_id": "aaa79efb588cab848656f8a7c432b5445743ea73",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/027a8068f4473dce4edee09207d658e0d8b302fd"
        },
        "date": 1617154333213,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15946.655111806875,
            "unit": "iter/sec",
            "range": "stddev: 0.000017310208969345207",
            "extra": "mean: 62.70907553895749 usec\nrounds: 12391"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4168666.3269021804,
            "unit": "iter/sec",
            "range": "stddev: 5.346103836267458e-8",
            "extra": "mean: 239.88487482093342 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13733.632067107057,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053515994354836316",
            "extra": "mean: 72.81395009810005 usec\nrounds: 5110"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 132494.29701087688,
            "unit": "iter/sec",
            "range": "stddev: 0.000003859466168394855",
            "extra": "mean: 7.547494666264065 usec\nrounds: 44246"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15964.639329071806,
            "unit": "iter/sec",
            "range": "stddev: 0.00001065453877451004",
            "extra": "mean: 62.6384335647964 usec\nrounds: 13532"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4100451.108649245,
            "unit": "iter/sec",
            "range": "stddev: 5.025872652370721e-7",
            "extra": "mean: 243.8756062452873 nsec\nrounds: 181819"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "bc3c7dcdf3e2c40540d1991ad1e05e63fed574cf",
          "message": ":green_heart: Remove `poetry-check` pre-commit hook",
          "timestamp": "2021-03-30T18:40:04-07:00",
          "tree_id": "35c2d8fa46277c9b4f9c35e0f1b40a05ba3ccc87",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/bc3c7dcdf3e2c40540d1991ad1e05e63fed574cf"
        },
        "date": 1617155355470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15594.62518483728,
            "unit": "iter/sec",
            "range": "stddev: 0.000046178415875443014",
            "extra": "mean: 64.12465757575913 usec\nrounds: 11807"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4270385.257114101,
            "unit": "iter/sec",
            "range": "stddev: 1.1089112807623947e-7",
            "extra": "mean: 234.17090959979976 nsec\nrounds: 11326"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13307.926176726049,
            "unit": "iter/sec",
            "range": "stddev: 0.00004162239403027689",
            "extra": "mean: 75.1431881061137 usec\nrounds: 7937"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 127853.04133195139,
            "unit": "iter/sec",
            "range": "stddev: 0.000008925347905327897",
            "extra": "mean: 7.821479955284357 usec\nrounds: 33899"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15532.973782454033,
            "unit": "iter/sec",
            "range": "stddev: 0.00005918713680688421",
            "extra": "mean: 64.37917259150949 usec\nrounds: 13193"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2954014.9375531864,
            "unit": "iter/sec",
            "range": "stddev: 2.7773815596498665e-7",
            "extra": "mean: 338.5223233936322 nsec\nrounds: 5801"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "026d915a0bf4ce7b0ed4709cb6e3cde1c38cb7b8",
          "message": ":green_heart: Remove `poetry-check` pre-commit hook",
          "timestamp": "2021-03-30T19:15:47-07:00",
          "tree_id": "7a11d23fbf3ac63044bb5e6301d5646905ef62e8",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/026d915a0bf4ce7b0ed4709cb6e3cde1c38cb7b8"
        },
        "date": 1617157204559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14641.457564253795,
            "unit": "iter/sec",
            "range": "stddev: 0.000021255397891304014",
            "extra": "mean: 68.29921103220198 usec\nrounds: 12690"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4722211.486837634,
            "unit": "iter/sec",
            "range": "stddev: 4.435441073129279e-7",
            "extra": "mean: 211.76518730426298 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12214.894554867918,
            "unit": "iter/sec",
            "range": "stddev: 0.000020133699303310525",
            "extra": "mean: 81.86726422468189 usec\nrounds: 7645"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 160548.77900476276,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026637338538005972",
            "extra": "mean: 6.228636593806387 usec\nrounds: 28010"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14690.00096263807,
            "unit": "iter/sec",
            "range": "stddev: 0.0000147421566154909",
            "extra": "mean: 68.07351494008462 usec\nrounds: 13755"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4982039.215713602,
            "unit": "iter/sec",
            "range": "stddev: 5.7255431486763524e-8",
            "extra": "mean: 200.72102139348078 nsec\nrounds: 188644"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "5c8b260c341cc0553010731d0e2967ac80d24a8e",
          "message": ":green_heart: Temporarily disable `log4brains` until fixed\n\nSee: /thomvaill/log4brains#27",
          "timestamp": "2021-03-30T19:45:42-07:00",
          "tree_id": "0cb40c2555845e1ed4d4d3ba29ea0b2d71cea309",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/5c8b260c341cc0553010731d0e2967ac80d24a8e"
        },
        "date": 1617159001536,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15822.66723322185,
            "unit": "iter/sec",
            "range": "stddev: 0.000030267973985610517",
            "extra": "mean: 63.20046963386574 usec\nrounds: 5236"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4079072.73314242,
            "unit": "iter/sec",
            "range": "stddev: 9.592295392696686e-7",
            "extra": "mean: 245.15375562563798 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13520.672698851127,
            "unit": "iter/sec",
            "range": "stddev: 0.00006592567076226491",
            "extra": "mean: 73.96081705941832 usec\nrounds: 9074"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 116979.3479977787,
            "unit": "iter/sec",
            "range": "stddev: 0.000020037140515501532",
            "extra": "mean: 8.548517470100695 usec\nrounds: 3320"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15803.27988104123,
            "unit": "iter/sec",
            "range": "stddev: 0.000040464827288587743",
            "extra": "mean: 63.27800352379212 usec\nrounds: 13624"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4118921.917645888,
            "unit": "iter/sec",
            "range": "stddev: 3.8550881469917747e-7",
            "extra": "mean: 242.78197547662762 nsec\nrounds: 196040"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "12dab5d9a9e4dcf1e657d527ac026c6c8103768c",
          "message": ":green_heart: Temporarily disable `log4brains` until fixed\n\nSee: /thomvaill/log4brains#27",
          "timestamp": "2021-03-30T19:48:30-07:00",
          "tree_id": "9594a584d9e60aa053fd48ccdb1a24219f334a81",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/12dab5d9a9e4dcf1e657d527ac026c6c8103768c"
        },
        "date": 1617159480312,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14427.620906984821,
            "unit": "iter/sec",
            "range": "stddev: 0.00011692255415355067",
            "extra": "mean: 69.3114967773981 usec\nrounds: 10707"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3999245.2760516205,
            "unit": "iter/sec",
            "range": "stddev: 1.645761439096303e-7",
            "extra": "mean: 250.0471791485869 nsec\nrounds: 5158"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12503.466912662518,
            "unit": "iter/sec",
            "range": "stddev: 0.00008656795556906977",
            "extra": "mean: 79.97781791122904 usec\nrounds: 9067"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 115711.13724323029,
            "unit": "iter/sec",
            "range": "stddev: 0.000005866605154586798",
            "extra": "mean: 8.64221045462506 usec\nrounds: 31546"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14855.096246583906,
            "unit": "iter/sec",
            "range": "stddev: 0.00009720609511214616",
            "extra": "mean: 67.31696539697352 usec\nrounds: 13756"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3929966.5099823656,
            "unit": "iter/sec",
            "range": "stddev: 1.2081562294429366e-7",
            "extra": "mean: 254.45509458157633 nsec\nrounds: 5203"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "59c807d59fe3fc9817aca2999e22cc538b88fa7a",
          "message": ":green_heart: Temporarily disable `log4brains` until fixed\n\nSee: /thomvaill/log4brains#27",
          "timestamp": "2021-03-30T19:56:58-07:00",
          "tree_id": "a46d38e0285aeac87038b0d70aaec3fbf71da1d6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/59c807d59fe3fc9817aca2999e22cc538b88fa7a"
        },
        "date": 1617159970627,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14711.83198176583,
            "unit": "iter/sec",
            "range": "stddev: 0.00005015624536122846",
            "extra": "mean: 67.97250004210366 usec\nrounds: 11961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3722062.516391933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015286092795740683",
            "extra": "mean: 268.66824390938007 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12955.780388187459,
            "unit": "iter/sec",
            "range": "stddev: 0.00011355598877038869",
            "extra": "mean: 77.18562448864589 usec\nrounds: 5374"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 115435.831454598,
            "unit": "iter/sec",
            "range": "stddev: 0.00003123531621722086",
            "extra": "mean: 8.662821477517658 usec\nrounds: 42370"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13972.585342558114,
            "unit": "iter/sec",
            "range": "stddev: 0.00007500149667980507",
            "extra": "mean: 71.56871656057598 usec\nrounds: 13315"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3928110.11898659,
            "unit": "iter/sec",
            "range": "stddev: 1.3928515436522831e-8",
            "extra": "mean: 254.57534786681646 nsec\nrounds: 11338"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f769ed3261f70cace81a1a1a6ba73349bcd16a2",
          "message": "Merge pull request #107 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-2.11.1\n\n⬆️ Bump pre-commit from 2.10.1 to 2.11.1 in /.github/workflows",
          "timestamp": "2021-03-30T22:36:19-07:00",
          "tree_id": "330fe9cdc63269a4c7eec2a3993ec79e055ed4d1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/9f769ed3261f70cace81a1a1a6ba73349bcd16a2"
        },
        "date": 1617169186229,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16577.806010412573,
            "unit": "iter/sec",
            "range": "stddev: 0.000001443953805317564",
            "extra": "mean: 60.321613087515736 usec\nrounds: 6831"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4959610.8359467285,
            "unit": "iter/sec",
            "range": "stddev: 1.2669940004942438e-7",
            "extra": "mean: 201.62872311532422 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14575.201230868714,
            "unit": "iter/sec",
            "range": "stddev: 0.000001972414582920583",
            "extra": "mean: 68.60968738339662 usec\nrounds: 5374"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 152051.86416850542,
            "unit": "iter/sec",
            "range": "stddev: 3.010372033911948e-7",
            "extra": "mean: 6.576703320728708 usec\nrounds: 26109"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16526.820335572556,
            "unit": "iter/sec",
            "range": "stddev: 0.000006422883040195606",
            "extra": "mean: 60.507706848339495 usec\nrounds: 14368"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4730385.841295989,
            "unit": "iter/sec",
            "range": "stddev: 3.552891693239722e-8",
            "extra": "mean: 211.39924597061696 nsec\nrounds: 5835"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a5e9081d08843e262d25036d58a0ce1402aaf74",
          "message": "Merge pull request #109 from TeoZosa/dependabot/pip/pre-commit-2.11.1\n\n⬆️ Bump pre-commit from 2.10.1 to 2.11.1",
          "timestamp": "2021-03-31T17:55:44-07:00",
          "tree_id": "d7533f6792bb85b782849569bcc6b62d3fc1bdd5",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/6a5e9081d08843e262d25036d58a0ce1402aaf74"
        },
        "date": 1617238782133,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15871.798762540117,
            "unit": "iter/sec",
            "range": "stddev: 0.000017242545596004585",
            "extra": "mean: 63.00483108191578 usec\nrounds: 11325"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4158169.711289636,
            "unit": "iter/sec",
            "range": "stddev: 2.2781486665326427e-8",
            "extra": "mean: 240.49042473744123 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13010.293865398988,
            "unit": "iter/sec",
            "range": "stddev: 0.000026911867306272035",
            "extra": "mean: 76.86221466984004 usec\nrounds: 6326"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 132921.38689217888,
            "unit": "iter/sec",
            "range": "stddev: 8.880725911866804e-7",
            "extra": "mean: 7.523243801324197 usec\nrounds: 33113"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15618.044767898054,
            "unit": "iter/sec",
            "range": "stddev: 0.000023811556494012316",
            "extra": "mean: 64.02850131761944 usec\nrounds: 13662"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2339030.2381690564,
            "unit": "iter/sec",
            "range": "stddev: 2.9251625912099443e-7",
            "extra": "mean: 427.52760681827647 nsec\nrounds: 3586"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "204e457fca00ee54142778646afce198b97d8213",
          "message": "Merge pull request #108 from TeoZosa/dependabot/pip/dot-github/workflows/cruft-2.8.0\n\n⬆️ Bump cruft from 2.6.1 to 2.8.0 in /.github/workflows",
          "timestamp": "2021-03-31T17:55:31-07:00",
          "tree_id": "84d2603467af499aa4b7fe6a2ae029358be4a41c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/204e457fca00ee54142778646afce198b97d8213"
        },
        "date": 1617238801054,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15547.565896944463,
            "unit": "iter/sec",
            "range": "stddev: 0.000025845805709839064",
            "extra": "mean: 64.31874974053196 usec\nrounds: 11560"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3935371.2496442096,
            "unit": "iter/sec",
            "range": "stddev: 7.503607762229606e-7",
            "extra": "mean: 254.10563236958322 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12926.854945706289,
            "unit": "iter/sec",
            "range": "stddev: 0.00005349395612648501",
            "extra": "mean: 77.35833690407073 usec\nrounds: 8961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 129640.46002314927,
            "unit": "iter/sec",
            "range": "stddev: 8.563943554584313e-7",
            "extra": "mean: 7.713641249201329 usec\nrounds: 31947"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14740.371329144516,
            "unit": "iter/sec",
            "range": "stddev: 0.00010809817493005396",
            "extra": "mean: 67.84089611248868 usec\nrounds: 13351"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4085765.871098216,
            "unit": "iter/sec",
            "range": "stddev: 3.4544172588753964e-8",
            "extra": "mean: 244.75215456486134 nsec\nrounds: 199961"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84b8ac562337ee8e042a3bff99dc564cedefeda7",
          "message": "Merge pull request #111 from TeoZosa/dependabot/pip/cruft-2.8.0\n\n⬆️ Bump cruft from 2.7.0 to 2.8.0",
          "timestamp": "2021-04-01T09:59:45-07:00",
          "tree_id": "987c89e46d48a397d5dcaabb62a636e41ce05fb7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/84b8ac562337ee8e042a3bff99dc564cedefeda7"
        },
        "date": 1617296640375,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15225.446667639311,
            "unit": "iter/sec",
            "range": "stddev: 0.000027567364419770526",
            "extra": "mean: 65.67951810080125 usec\nrounds: 3812"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4369128.655258857,
            "unit": "iter/sec",
            "range": "stddev: 4.35290903047978e-7",
            "extra": "mean: 228.87858859388245 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12720.808256839488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000348173031081368",
            "extra": "mean: 78.61135706234221 usec\nrounds: 4439"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 124949.03804866233,
            "unit": "iter/sec",
            "range": "stddev: 0.000009890860530659114",
            "extra": "mean: 8.003262895153643 usec\nrounds: 48080"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15315.124638929532,
            "unit": "iter/sec",
            "range": "stddev: 0.00003781202904232663",
            "extra": "mean: 65.2949305719719 usec\nrounds: 7605"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2432898.080468933,
            "unit": "iter/sec",
            "range": "stddev: 0.000001041460528090838",
            "extra": "mean: 411.0324259071524 nsec\nrounds: 56498"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a025a2b5c14d2d008d9177f761deb00d5cf1ffae",
          "message": "Merge pull request #115 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-v5.15.0\n\n⬆️ Bump release-drafter/release-drafter from v5.14.0 to v5.15.0",
          "timestamp": "2021-04-01T10:00:06-07:00",
          "tree_id": "ed89520603fa76c4cfce45b2ece672a76d122b55",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/a025a2b5c14d2d008d9177f761deb00d5cf1ffae"
        },
        "date": 1617296647530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14340.616324793233,
            "unit": "iter/sec",
            "range": "stddev: 0.000045977621679915335",
            "extra": "mean: 69.73200993259391 usec\nrounds: 12887"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4532523.047116747,
            "unit": "iter/sec",
            "range": "stddev: 3.2825818365266284e-7",
            "extra": "mean: 220.62767019720008 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12737.686620762674,
            "unit": "iter/sec",
            "range": "stddev: 0.00006809393645981545",
            "extra": "mean: 78.50719127992839 usec\nrounds: 9243"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 134328.70293010463,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010542757742436988",
            "extra": "mean: 7.4444253401324865 usec\nrounds: 3315"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15537.118213942345,
            "unit": "iter/sec",
            "range": "stddev: 0.00002010883420508733",
            "extra": "mean: 64.36199984001169 usec\nrounds: 12516"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4535210.359972053,
            "unit": "iter/sec",
            "range": "stddev: 1.6642002485514078e-7",
            "extra": "mean: 220.49693853828225 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd9d271cdceb96750ab6f54107600200c2fb759c",
          "message": "Merge pull request #116 from TeoZosa/dependabot/pip/sphinx-3.5.3\n\n⬆️ Bump sphinx from 3.5.2 to 3.5.3",
          "timestamp": "2021-04-01T12:52:36-07:00",
          "tree_id": "f022476baec45229fd7c878b9f7e6e47d005e3ee",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/dd9d271cdceb96750ab6f54107600200c2fb759c"
        },
        "date": 1617306992744,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15478.75487398889,
            "unit": "iter/sec",
            "range": "stddev: 0.000024319127195322812",
            "extra": "mean: 64.60467964903556 usec\nrounds: 12196"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4712003.846165645,
            "unit": "iter/sec",
            "range": "stddev: 4.243901599468448e-7",
            "extra": "mean: 212.22393543154064 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12665.662061658966,
            "unit": "iter/sec",
            "range": "stddev: 0.000018986082698115114",
            "extra": "mean: 78.95363030624065 usec\nrounds: 7279"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 132081.10082799516,
            "unit": "iter/sec",
            "range": "stddev: 0.000004566992001690748",
            "extra": "mean: 7.571105886695076 usec\nrounds: 46512"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15116.083966817108,
            "unit": "iter/sec",
            "range": "stddev: 0.000023278025535014668",
            "extra": "mean: 66.15470000002675 usec\nrounds: 8540"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4473863.414103726,
            "unit": "iter/sec",
            "range": "stddev: 3.2114290770732607e-7",
            "extra": "mean: 223.5204581450469 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6fb12c08c1257e16de156116ca5330b500876c3f",
          "message": "Merge pull request #119 from TeoZosa/dependabot/pip/pylint-2.7.4\n\n⬆️ Bump pylint from 2.7.2 to 2.7.4",
          "timestamp": "2021-04-01T13:09:18-07:00",
          "tree_id": "06811da5c2eeaf63f939a4cd4f305f6a3fd3f67f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/6fb12c08c1257e16de156116ca5330b500876c3f"
        },
        "date": 1617307984622,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15716.63735565116,
            "unit": "iter/sec",
            "range": "stddev: 0.000015367730463168933",
            "extra": "mean: 63.626841885515326 usec\nrounds: 12453"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 2800078.226861787,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013129344103082737",
            "extra": "mean: 357.13287950556975 nsec\nrounds: 5362"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13606.048848721224,
            "unit": "iter/sec",
            "range": "stddev: 0.000013541715927736482",
            "extra": "mean: 73.49672275312946 usec\nrounds: 8368"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 125525.2906311642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018530143351456635",
            "extra": "mean: 7.966522084687607 usec\nrounds: 34481"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15653.757238759043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000666592220976763",
            "extra": "mean: 63.88242673931203 usec\nrounds: 13568"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4049630.589106046,
            "unit": "iter/sec",
            "range": "stddev: 1.4851571373525048e-7",
            "extra": "mean: 246.93610392268178 nsec\nrounds: 5023"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5d716e504c5f07f70a8a2845141c97e3c91e4e8",
          "message": "Merge pull request #120 from TeoZosa/dependabot/pip/importlib-metadata-3.10.0\n\n⬆️ Bump importlib-metadata from 2.1.1 to 3.10.0",
          "timestamp": "2021-04-01T13:23:08-07:00",
          "tree_id": "4fbe3a1adce134633c08f6acc36593e81eff300a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/a5d716e504c5f07f70a8a2845141c97e3c91e4e8"
        },
        "date": 1617308858974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15206.600765522942,
            "unit": "iter/sec",
            "range": "stddev: 0.000013455974314230452",
            "extra": "mean: 65.760916290197 usec\nrounds: 2879"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4134633.5420820173,
            "unit": "iter/sec",
            "range": "stddev: 2.8096617957091716e-7",
            "extra": "mean: 241.859402973017 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12446.677447985725,
            "unit": "iter/sec",
            "range": "stddev: 0.00006517748057164017",
            "extra": "mean: 80.34272633632298 usec\nrounds: 6117"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 126291.58591186111,
            "unit": "iter/sec",
            "range": "stddev: 0.000007088304220384654",
            "extra": "mean: 7.9181838820038255 usec\nrounds: 44844"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14852.754309635538,
            "unit": "iter/sec",
            "range": "stddev: 0.00001849174024809098",
            "extra": "mean: 67.3275797305327 usec\nrounds: 12166"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4047471.2579311514,
            "unit": "iter/sec",
            "range": "stddev: 3.711690015837968e-7",
            "extra": "mean: 247.06784465491762 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "5e797d096b13772636b345ba1c683b47e6df5dcd",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-04-13T13:16:27-07:00",
          "tree_id": "c311f64d832dd305664edfc8bc10892be12655a1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/5e797d096b13772636b345ba1c683b47e6df5dcd"
        },
        "date": 1618345254738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14876.657592824738,
            "unit": "iter/sec",
            "range": "stddev: 0.00009892132072810783",
            "extra": "mean: 67.21940017509826 usec\nrounds: 10288"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3978998.5156568433,
            "unit": "iter/sec",
            "range": "stddev: 2.065719372816281e-7",
            "extra": "mean: 251.31952074505332 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12495.150970367282,
            "unit": "iter/sec",
            "range": "stddev: 0.000015376910220090286",
            "extra": "mean: 80.03104583302253 usec\nrounds: 9251"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 117278.78092810817,
            "unit": "iter/sec",
            "range": "stddev: 0.000005136903187262556",
            "extra": "mean: 8.526691632418993 usec\nrounds: 43860"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14845.15663352133,
            "unit": "iter/sec",
            "range": "stddev: 0.0000176201664182704",
            "extra": "mean: 67.36203764545905 usec\nrounds: 7305"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3943828.9580419557,
            "unit": "iter/sec",
            "range": "stddev: 1.8588051480042825e-7",
            "extra": "mean: 253.56069206832112 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "a826ea2ec51994eec38d6ce0ff6db084a4d3191f",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-04-13T13:19:44-07:00",
          "tree_id": "a8f17b1e4af6b94fd8ee7237471b4e678e1e3872",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/a826ea2ec51994eec38d6ce0ff6db084a4d3191f"
        },
        "date": 1618345745304,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15385.90319901958,
            "unit": "iter/sec",
            "range": "stddev: 0.00006445406494954123",
            "extra": "mean: 64.99455943956036 usec\nrounds: 12500"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4157858.4213745613,
            "unit": "iter/sec",
            "range": "stddev: 1.86696010277441e-8",
            "extra": "mean: 240.50842973849737 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13243.970397139135,
            "unit": "iter/sec",
            "range": "stddev: 0.000055665085198364934",
            "extra": "mean: 75.5060582297898 usec\nrounds: 8913"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 122349.85083336626,
            "unit": "iter/sec",
            "range": "stddev: 5.903469853777816e-7",
            "extra": "mean: 8.17328336069608 usec\nrounds: 38908"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15063.724186925661,
            "unit": "iter/sec",
            "range": "stddev: 0.00009313900020094446",
            "extra": "mean: 66.38464615994066 usec\nrounds: 13020"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4157274.535358737,
            "unit": "iter/sec",
            "range": "stddev: 1.6804690900690523e-8",
            "extra": "mean: 240.54220896252448 nsec\nrounds: 156250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "ba226506d7ec28e269432141e0e987f900262839",
          "message": ":arrow_up: Auto-update `pre-commit` hooks",
          "timestamp": "2021-04-13T13:27:12-07:00",
          "tree_id": "557dc778e13d4b16bd321eab0ce32a832d548a4b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/ba226506d7ec28e269432141e0e987f900262839"
        },
        "date": 1618346088003,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15126.31448809773,
            "unit": "iter/sec",
            "range": "stddev: 0.00007288904094651896",
            "extra": "mean: 66.1099569751018 usec\nrounds: 9785"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3781032.140396234,
            "unit": "iter/sec",
            "range": "stddev: 3.906722055494764e-7",
            "extra": "mean: 264.4780480220577 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12553.077670278846,
            "unit": "iter/sec",
            "range": "stddev: 0.000012441109875246502",
            "extra": "mean: 79.66173923767226 usec\nrounds: 8897"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 111131.37995920873,
            "unit": "iter/sec",
            "range": "stddev: 0.000006692906103742788",
            "extra": "mean: 8.998358522741773 usec\nrounds: 36497"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15009.973149696638,
            "unit": "iter/sec",
            "range": "stddev: 0.00003778555106094043",
            "extra": "mean: 66.62237100805278 usec\nrounds: 13245"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3889153.0679635787,
            "unit": "iter/sec",
            "range": "stddev: 1.1141444061694197e-7",
            "extra": "mean: 257.125390162089 nsec\nrounds: 87720"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "423655be1a02a7112030df9a4f95ef561bee8bfe",
          "message": "Merge pull request #126 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-2.12.0\n\n⬆️ Bump pre-commit from 2.11.1 to 2.12.0 in /.github/workflows",
          "timestamp": "2021-04-13T14:06:19-07:00",
          "tree_id": "76861932d0f6641cac992e5f9a3da30fa0e4fcb7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/423655be1a02a7112030df9a4f95ef561bee8bfe"
        },
        "date": 1618348242550,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14347.290995291005,
            "unit": "iter/sec",
            "range": "stddev: 0.00009087635429455404",
            "extra": "mean: 69.69956909135075 usec\nrounds: 11991"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4064498.326984847,
            "unit": "iter/sec",
            "range": "stddev: 3.875499731559526e-7",
            "extra": "mean: 246.03282362323583 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12049.31015906808,
            "unit": "iter/sec",
            "range": "stddev: 0.00012032267373830383",
            "extra": "mean: 82.99230302802184 usec\nrounds: 9141"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 122944.5313055369,
            "unit": "iter/sec",
            "range": "stddev: 0.00001402435082749746",
            "extra": "mean: 8.133749337047284 usec\nrounds: 42017"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14571.255048758168,
            "unit": "iter/sec",
            "range": "stddev: 0.00004282470339363561",
            "extra": "mean: 68.62826823453514 usec\nrounds: 9488"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4107951.1020161007,
            "unit": "iter/sec",
            "range": "stddev: 3.14956185790949e-7",
            "extra": "mean: 243.43035619606053 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "520e91c91ac82f054672ae63b0609344944d0097",
          "message": "Merge pull request #133 from TeoZosa/dependabot/github_actions/actions/setup-python-v2.2.2\n\n⬆️ Update actions/setup-python requirement to v2.2.2",
          "timestamp": "2021-04-13T14:06:25-07:00",
          "tree_id": "6088dbf210567313cb2a7298af8b96994f36cecc",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/520e91c91ac82f054672ae63b0609344944d0097"
        },
        "date": 1618348248786,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14568.292171442898,
            "unit": "iter/sec",
            "range": "stddev: 0.00002740751071531758",
            "extra": "mean: 68.64222574834291 usec\nrounds: 12195"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4231200.832630159,
            "unit": "iter/sec",
            "range": "stddev: 5.234017219518034e-7",
            "extra": "mean: 236.33952619031 nsec\nrounds: 12579"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12376.798405749907,
            "unit": "iter/sec",
            "range": "stddev: 0.000044068096256521666",
            "extra": "mean: 80.79633902216817 usec\nrounds: 9141"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 129113.41251427234,
            "unit": "iter/sec",
            "range": "stddev: 0.000009498441321591733",
            "extra": "mean: 7.7451287246354745 usec\nrounds: 37452"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14439.324480774845,
            "unit": "iter/sec",
            "range": "stddev: 0.00005632930211394472",
            "extra": "mean: 69.25531740293282 usec\nrounds: 13831"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4138662.488301003,
            "unit": "iter/sec",
            "range": "stddev: 5.00134456367398e-7",
            "extra": "mean: 241.62395528172058 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "3dd7e3017bdb2d9ebd1522feb687944d9bfe8226",
          "message": ":construction_worker: Include minor versions in Dependabot PR auto-merging",
          "timestamp": "2021-04-26T08:00:07-07:00",
          "tree_id": "6cab88aeff2024d8b338bc72d74bce079f8c0a05",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/3dd7e3017bdb2d9ebd1522feb687944d9bfe8226"
        },
        "date": 1619449436308,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16514.350568316582,
            "unit": "iter/sec",
            "range": "stddev: 0.000008293319377129495",
            "extra": "mean: 60.55339541589594 usec\nrounds: 6239"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4978525.50849268,
            "unit": "iter/sec",
            "range": "stddev: 3.070099108281889e-7",
            "extra": "mean: 200.86268480357407 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14493.444229532175,
            "unit": "iter/sec",
            "range": "stddev: 0.000006695669411120763",
            "extra": "mean: 68.99671217986798 usec\nrounds: 9294"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 147442.13516379634,
            "unit": "iter/sec",
            "range": "stddev: 4.962306051709002e-7",
            "extra": "mean: 6.782321748725903 usec\nrounds: 46297"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16547.310164639654,
            "unit": "iter/sec",
            "range": "stddev: 0.00000290423161139443",
            "extra": "mean: 60.432782733288235 usec\nrounds: 9776"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4988771.750536678,
            "unit": "iter/sec",
            "range": "stddev: 1.0547728575437755e-7",
            "extra": "mean: 200.4501408372445 nsec\nrounds: 200000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3bc83e9750f20e999762dba38ebc4d0560c3f72b",
          "message": "Merge pull request #139 from TeoZosa/dependabot/pip/sphinx-autodoc-typehints-1.12.0\n\n⬆️ Bump sphinx-autodoc-typehints from 1.11.1 to 1.12.0",
          "timestamp": "2021-04-26T08:13:35-07:00",
          "tree_id": "9716c00eecba0e7e15061963971a553b5d9edd66",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/3bc83e9750f20e999762dba38ebc4d0560c3f72b"
        },
        "date": 1619450251140,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14526.776546902267,
            "unit": "iter/sec",
            "range": "stddev: 0.000022010359509173653",
            "extra": "mean: 68.83839623823793 usec\nrounds: 11377"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3915514.56076774,
            "unit": "iter/sec",
            "range": "stddev: 1.0913831639061539e-7",
            "extra": "mean: 255.3942743609693 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11942.579801858508,
            "unit": "iter/sec",
            "range": "stddev: 0.00005054338254391468",
            "extra": "mean: 83.7340019150954 usec\nrounds: 5744"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 119882.31274910527,
            "unit": "iter/sec",
            "range": "stddev: 0.000004607951341147832",
            "extra": "mean: 8.34151408217192 usec\nrounds: 43104"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14657.128518979762,
            "unit": "iter/sec",
            "range": "stddev: 0.000021881966797364313",
            "extra": "mean: 68.22618759909781 usec\nrounds: 13870"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3991486.520501355,
            "unit": "iter/sec",
            "range": "stddev: 9.733021612939197e-8",
            "extra": "mean: 250.5332273737152 nsec\nrounds: 11325"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f9c3f26b099157d29d274e9f5b86a22d3a3392e",
          "message": "Merge pull request #146 from TeoZosa/dependabot/pip/importlib-metadata-4.0.1\n\n⬆️ Bump importlib-metadata from 3.10.1 to 4.0.1",
          "timestamp": "2021-04-26T09:31:45-07:00",
          "tree_id": "d984ca5dcfc32fcfe831b061471e79f08e4381ee",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/6f9c3f26b099157d29d274e9f5b86a22d3a3392e"
        },
        "date": 1619454947249,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15121.141959125966,
            "unit": "iter/sec",
            "range": "stddev: 0.00004514436900014683",
            "extra": "mean: 66.13257138271071 usec\nrounds: 6262"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3886122.6955827507,
            "unit": "iter/sec",
            "range": "stddev: 2.0651742111512524e-7",
            "extra": "mean: 257.3258948144755 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12664.74829651446,
            "unit": "iter/sec",
            "range": "stddev: 0.000018645852211637927",
            "extra": "mean: 78.95932683282903 usec\nrounds: 9026"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 114406.84211805325,
            "unit": "iter/sec",
            "range": "stddev: 0.000007768313557084317",
            "extra": "mean: 8.740735968991503 usec\nrounds: 45453"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14936.775686511872,
            "unit": "iter/sec",
            "range": "stddev: 0.00012232408716001119",
            "extra": "mean: 66.94885301805897 usec\nrounds: 6511"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3641595.8100695643,
            "unit": "iter/sec",
            "range": "stddev: 8.516597487005165e-7",
            "extra": "mean: 274.6048853732488 nsec\nrounds: 153847"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bcc0fc461a4542409e6ce02d19cc5fa97e601668",
          "message": "Merge pull request #147 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.1\n\n⬆️ Bump pip from 21.0.1 to 21.1 in /.github/workflows",
          "timestamp": "2021-04-26T09:31:57-07:00",
          "tree_id": "6025933f27760b7036abf240d55e3fc95a415b6d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/bcc0fc461a4542409e6ce02d19cc5fa97e601668"
        },
        "date": 1619454969572,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14694.067894924503,
            "unit": "iter/sec",
            "range": "stddev: 0.000057538330755819676",
            "extra": "mean: 68.05467397802151 usec\nrounds: 7386"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3725235.704696103,
            "unit": "iter/sec",
            "range": "stddev: 0.000001040150903282755",
            "extra": "mean: 268.4393899529735 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12348.56144605229,
            "unit": "iter/sec",
            "range": "stddev: 0.000032335300605089345",
            "extra": "mean: 80.98109276685746 usec\nrounds: 9346"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 118757.3028662069,
            "unit": "iter/sec",
            "range": "stddev: 0.00002235287669018566",
            "extra": "mean: 8.420534787040502 usec\nrounds: 41323"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14075.537931554061,
            "unit": "iter/sec",
            "range": "stddev: 0.00011371495215084901",
            "extra": "mean: 71.04524209751402 usec\nrounds: 10661"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3775351.904922153,
            "unit": "iter/sec",
            "range": "stddev: 8.51905989240463e-7",
            "extra": "mean: 264.8759705542964 nsec\nrounds: 169492"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87e985895bbdbde884fa338e95e2fbcf76767961",
          "message": "Merge pull request #152 from TeoZosa/dependabot/pip/black-21.4b0\n\n⬆️ Bump black from 20.8b1 to 21.4b0",
          "timestamp": "2021-04-26T10:39:26-07:00",
          "tree_id": "6ec822a16705fcea22fe94ad59f471f23a53a90c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/87e985895bbdbde884fa338e95e2fbcf76767961"
        },
        "date": 1619458973297,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16235.824371282644,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056267994552236196",
            "extra": "mean: 61.59219126370724 usec\nrounds: 7257"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4925067.829067238,
            "unit": "iter/sec",
            "range": "stddev: 1.3192158060076116e-7",
            "extra": "mean: 203.04288889130677 nsec\nrounds: 125000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14565.172944371878,
            "unit": "iter/sec",
            "range": "stddev: 0.000002666786871497557",
            "extra": "mean: 68.65692593004256 usec\nrounds: 8681"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 147971.62823193206,
            "unit": "iter/sec",
            "range": "stddev: 5.407760700501511e-7",
            "extra": "mean: 6.758052283053822 usec\nrounds: 33223"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16365.229938286742,
            "unit": "iter/sec",
            "range": "stddev: 0.000010275666120935586",
            "extra": "mean: 61.10516037788645 usec\nrounds: 13967"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5078571.225924462,
            "unit": "iter/sec",
            "range": "stddev: 5.0204884086459056e-8",
            "extra": "mean: 196.90577438304604 nsec\nrounds: 104167"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81ccf9d75a2098288832da691980a621b2b3b16c",
          "message": "Merge pull request #154 from TeoZosa/dependabot/pip/pylint-2.8.2",
          "timestamp": "2021-04-27T13:12:20Z",
          "tree_id": "c37548a2e165d0b39c91c719bf01a243d1db49b3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/81ccf9d75a2098288832da691980a621b2b3b16c"
        },
        "date": 1619808310586,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14846.360058654038,
            "unit": "iter/sec",
            "range": "stddev: 0.00009384192220086366",
            "extra": "mean: 67.35657737312478 usec\nrounds: 11535"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3742805.656369319,
            "unit": "iter/sec",
            "range": "stddev: 7.902493937329882e-7",
            "extra": "mean: 267.17924781903946 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12170.731234709558,
            "unit": "iter/sec",
            "range": "stddev: 0.00016291636650663394",
            "extra": "mean: 82.16433184787718 usec\nrounds: 8977"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 116385.95755658249,
            "unit": "iter/sec",
            "range": "stddev: 0.000007484401950410243",
            "extra": "mean: 8.592101839380732 usec\nrounds: 41153"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14905.863033071753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000696340020187869",
            "extra": "mean: 67.08769547803387 usec\nrounds: 7740"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3645459.122573249,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010740103161382334",
            "extra": "mean: 274.3138700443725 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14a297118b56fc9650d1cf7c045e768a5d352a3c",
          "message": "Merge pull request #156 from TeoZosa/dependabot/pip/black-21.4b2\n\n⬆️ Bump black from 21.4b0 to 21.4b2",
          "timestamp": "2021-04-30T11:55:44-07:00",
          "tree_id": "787440b5bc9bab9736e950da1fae9f239a3a0a28",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/14a297118b56fc9650d1cf7c045e768a5d352a3c"
        },
        "date": 1619809177306,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14550.804780612845,
            "unit": "iter/sec",
            "range": "stddev: 0.00003342538975284302",
            "extra": "mean: 68.724721077447 usec\nrounds: 11211"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4442231.849897963,
            "unit": "iter/sec",
            "range": "stddev: 2.41890106364351e-7",
            "extra": "mean: 225.1120683902795 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11881.52455082397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000655662415836819",
            "extra": "mean: 84.164283440432 usec\nrounds: 4523"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 124243.21188271615,
            "unit": "iter/sec",
            "range": "stddev: 0.000018869381344801655",
            "extra": "mean: 8.048729462531814 usec\nrounds: 26525"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14066.181867299172,
            "unit": "iter/sec",
            "range": "stddev: 0.00012356829884838",
            "extra": "mean: 71.09249755434938 usec\nrounds: 8383"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3804532.7699927264,
            "unit": "iter/sec",
            "range": "stddev: 6.287905916752519e-7",
            "extra": "mean: 262.84436498674097 nsec\nrounds: 169492"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "f346cea77e8428352449ce082b0071148ac12424",
          "message": ":arrow_up: Upgrade template dependencies",
          "timestamp": "2021-05-02T15:31:05-07:00",
          "tree_id": "f887703a6a85869ce7e6b2385bbfe929c529c294",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/f346cea77e8428352449ce082b0071148ac12424"
        },
        "date": 1619995037277,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14319.391753804803,
            "unit": "iter/sec",
            "range": "stddev: 0.00007416096465689143",
            "extra": "mean: 69.83536851237346 usec\nrounds: 12062"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 2779906.0708444803,
            "unit": "iter/sec",
            "range": "stddev: 3.0024498355602474e-7",
            "extra": "mean: 359.7243843912394 nsec\nrounds: 3211"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12354.883824039662,
            "unit": "iter/sec",
            "range": "stddev: 0.00003757414970681041",
            "extra": "mean: 80.93965222515797 usec\nrounds: 9302"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 145931.002008482,
            "unit": "iter/sec",
            "range": "stddev: 0.000001631467027201075",
            "extra": "mean: 6.8525535097872945 usec\nrounds: 32153"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14295.381296655167,
            "unit": "iter/sec",
            "range": "stddev: 0.00004289433135642981",
            "extra": "mean: 69.95266367844137 usec\nrounds: 13386"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3492007.937149681,
            "unit": "iter/sec",
            "range": "stddev: 8.55537346733064e-8",
            "extra": "mean: 286.3681921686125 nsec\nrounds: 5747"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "ccde155193d763a61a3e19d8f725de1c14b42e09",
          "message": ":bug: Fix `clean-requirements` target",
          "timestamp": "2021-05-02T15:45:34-07:00",
          "tree_id": "ebfd12f33af1986614bd9f53f35136d2bca1438c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/ccde155193d763a61a3e19d8f725de1c14b42e09"
        },
        "date": 1619995837059,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14149.93351392606,
            "unit": "iter/sec",
            "range": "stddev: 0.00007301458116546874",
            "extra": "mean: 70.67171015438494 usec\nrounds: 11099"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 2011463.9532788424,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024422706795246373",
            "extra": "mean: 497.15034583141414 nsec\nrounds: 52632"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11971.398669845701,
            "unit": "iter/sec",
            "range": "stddev: 0.000034809120263730023",
            "extra": "mean: 83.53242821315956 usec\nrounds: 2389"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 107295.0092130076,
            "unit": "iter/sec",
            "range": "stddev: 0.000011060247628403955",
            "extra": "mean: 9.320097992766359 usec\nrounds: 38462"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15048.795254241426,
            "unit": "iter/sec",
            "range": "stddev: 0.00002693546404239729",
            "extra": "mean: 66.45050205717665 usec\nrounds: 13369"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3469022.843064005,
            "unit": "iter/sec",
            "range": "stddev: 0.00000199534170462775",
            "extra": "mean: 288.26561404731274 nsec\nrounds: 175439"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "738e0829ad6edc60ccd6e9ba0a402c36c329dc3c",
          "message": ":construction_worker: Update RTD Python version to `3.9`",
          "timestamp": "2021-05-02T15:52:46-07:00",
          "tree_id": "5ac1422063764eea296a005edd616e925963edda",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/738e0829ad6edc60ccd6e9ba0a402c36c329dc3c"
        },
        "date": 1619996220092,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14678.891180218696,
            "unit": "iter/sec",
            "range": "stddev: 0.000015511056313487308",
            "extra": "mean: 68.12503667495008 usec\nrounds: 11561"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3970898.5619670264,
            "unit": "iter/sec",
            "range": "stddev: 2.4210955160105506e-7",
            "extra": "mean: 251.83216956914504 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11750.32327567631,
            "unit": "iter/sec",
            "range": "stddev: 0.000026121504315494655",
            "extra": "mean: 85.10404152624841 usec\nrounds: 4744"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 126351.24621304228,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037493726363184652",
            "extra": "mean: 7.914445088368093 usec\nrounds: 3278"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14053.744721558107,
            "unit": "iter/sec",
            "range": "stddev: 0.00008923688725849218",
            "extra": "mean: 71.15541229847615 usec\nrounds: 11351"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3876360.533738837,
            "unit": "iter/sec",
            "range": "stddev: 2.3253103983771136e-7",
            "extra": "mean: 257.97394006467897 nsec\nrounds: 67568"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "2e9cc6548a05cb4f88b819f2cca6f64be41aecce",
          "message": ":green_heart: Fix `mypy` error\n\ni.e.,\n```\nmypy.................................................................................Failed\n- hook id: mypy\n- duration: 9.74s\n- exit code: 1\n\ntests/test_main.py: note: In member \"test_typeguard_enabled\" of class \"TestRuntimeTypechecking\":\ntests/test_main.py:102:30: error: Argument 1 to \"version_callback\" has\nincompatible type \"str\"; expected \"Optional[bool]\"  [arg-type]\n                version_callback(\"True\")\n                                 ^\nFound 1 error in 1 file (checked 4 source files)\nSuccess: no issues found in 3 source files\n```",
          "timestamp": "2021-05-02T16:57:10-07:00",
          "tree_id": "98e6fc20e3297a860a543661d8275df7e0a7679f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/2e9cc6548a05cb4f88b819f2cca6f64be41aecce"
        },
        "date": 1620000103818,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14827.429015132268,
            "unit": "iter/sec",
            "range": "stddev: 0.000046577673796733934",
            "extra": "mean: 67.44257544443079 usec\nrounds: 10246"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4329909.200558676,
            "unit": "iter/sec",
            "range": "stddev: 2.9727665597328656e-7",
            "extra": "mean: 230.95172523957822 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11468.647601386452,
            "unit": "iter/sec",
            "range": "stddev: 0.000143187281774173",
            "extra": "mean: 87.19423900330753 usec\nrounds: 7343"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 122476.66795916531,
            "unit": "iter/sec",
            "range": "stddev: 0.000019168423201142004",
            "extra": "mean: 8.164820423865612 usec\nrounds: 45251"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14735.892836034887,
            "unit": "iter/sec",
            "range": "stddev: 0.00002939191264825725",
            "extra": "mean: 67.86151413605683 usec\nrounds: 6473"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4168973.9507430783,
            "unit": "iter/sec",
            "range": "stddev: 0.000001251009207852824",
            "extra": "mean: 239.86717398926223 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "1a85788615d3d703a82cca51c7183778b65ba621",
          "message": "Update `Go` version to `1.16`",
          "timestamp": "2021-05-02T17:03:12-07:00",
          "tree_id": "13602e8ae78baa87ed1a30915a579c504930c66b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/1a85788615d3d703a82cca51c7183778b65ba621"
        },
        "date": 1620000501612,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15065.039239008569,
            "unit": "iter/sec",
            "range": "stddev: 0.000019107962263926407",
            "extra": "mean: 66.37885133486118 usec\nrounds: 8953"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4467686.408306662,
            "unit": "iter/sec",
            "range": "stddev: 2.4063326225830834e-7",
            "extra": "mean: 223.82949665867343 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12271.124261256893,
            "unit": "iter/sec",
            "range": "stddev: 0.000029824948919536404",
            "extra": "mean: 81.49212563654483 usec\nrounds: 4521"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 136719.91372183472,
            "unit": "iter/sec",
            "range": "stddev: 0.000005909649004686998",
            "extra": "mean: 7.314223457122443 usec\nrounds: 51021"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15158.895187415212,
            "unit": "iter/sec",
            "range": "stddev: 0.00002556138468796126",
            "extra": "mean: 65.96786821444559 usec\nrounds: 9690"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4352858.511629539,
            "unit": "iter/sec",
            "range": "stddev: 1.955089999109111e-7",
            "extra": "mean: 229.73409251146077 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "07fd0ca8d9e8132c1ed313fc22fef6cbb210793c",
          "message": ":arrow_up: Update `Go` version to `1.16`",
          "timestamp": "2021-05-02T17:05:59-07:00",
          "tree_id": "13602e8ae78baa87ed1a30915a579c504930c66b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/07fd0ca8d9e8132c1ed313fc22fef6cbb210793c"
        },
        "date": 1620000939019,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 13608.490041500416,
            "unit": "iter/sec",
            "range": "stddev: 0.00014267377522024608",
            "extra": "mean: 73.48353836100864 usec\nrounds: 26042"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3816973.0952264853,
            "unit": "iter/sec",
            "range": "stddev: 2.9006169426189544e-7",
            "extra": "mean: 261.98769942904136 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11616.493969498191,
            "unit": "iter/sec",
            "range": "stddev: 0.0001598451292545501",
            "extra": "mean: 86.08449353356811 usec\nrounds: 5258"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 106789.25309281607,
            "unit": "iter/sec",
            "range": "stddev: 0.000029259844385716396",
            "extra": "mean: 9.364238170397618 usec\nrounds: 35588"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13750.756045024955,
            "unit": "iter/sec",
            "range": "stddev: 0.00007872913550008646",
            "extra": "mean: 72.72327403130693 usec\nrounds: 13316"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3805279.491205052,
            "unit": "iter/sec",
            "range": "stddev: 4.565303025517148e-7",
            "extra": "mean: 262.7927862622571 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "0acfe6b81ffbfb328857e2719b0015ea23d1606b",
          "message": ":construction_worker: Include minor versions in Dependabot PR auto-merging\n\nFor `cookiecutter` template.",
          "timestamp": "2021-05-03T09:38:33-07:00",
          "tree_id": "41b63fe92287384b79b5cc798ca7a23b81386dbc",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/0acfe6b81ffbfb328857e2719b0015ea23d1606b"
        },
        "date": 1620060214454,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14737.69564966308,
            "unit": "iter/sec",
            "range": "stddev: 0.00011095993973457918",
            "extra": "mean: 67.85321286118847 usec\nrounds: 11834"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3869952.101492639,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016774459645399878",
            "extra": "mean: 258.4011310150555 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12989.880131871221,
            "unit": "iter/sec",
            "range": "stddev: 0.00005654604185236381",
            "extra": "mean: 76.98300445024566 usec\nrounds: 5168"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 129143.89903899259,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011504156701566544",
            "extra": "mean: 7.743300360616096 usec\nrounds: 37172"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15214.163002820324,
            "unit": "iter/sec",
            "range": "stddev: 0.000021204728482054846",
            "extra": "mean: 65.7282296643348 usec\nrounds: 6196"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3857456.1733337007,
            "unit": "iter/sec",
            "range": "stddev: 0.000001826875924535743",
            "extra": "mean: 259.23820130789534 nsec\nrounds: 163908"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7892fcce1510d9b9ea6d24f845d0bf5e0ddcc4aa",
          "message": "Merge pull request #157 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.1.1\n\n⬆️ Bump pip from 21.1 to 21.1.1 in /.github/workflows",
          "timestamp": "2021-05-03T19:29:21-07:00",
          "tree_id": "6eae3fa0b283c5b2920f2484b182e918c005a859",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/7892fcce1510d9b9ea6d24f845d0bf5e0ddcc4aa"
        },
        "date": 1620095580180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15336.531955966586,
            "unit": "iter/sec",
            "range": "stddev: 0.000015521636978245536",
            "extra": "mean: 65.20378941413519 usec\nrounds: 6216"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4646349.903280613,
            "unit": "iter/sec",
            "range": "stddev: 4.883737382958365e-8",
            "extra": "mean: 215.2227061706419 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13830.78291985861,
            "unit": "iter/sec",
            "range": "stddev: 0.000007356180731685752",
            "extra": "mean: 72.30248683638676 usec\nrounds: 9268"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 140079.31587720462,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013898467695496966",
            "extra": "mean: 7.13881270577173 usec\nrounds: 44641"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15628.071229122052,
            "unit": "iter/sec",
            "range": "stddev: 0.000009008189470988511",
            "extra": "mean: 63.98742271768988 usec\nrounds: 13813"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4770683.074865646,
            "unit": "iter/sec",
            "range": "stddev: 5.314209363422909e-8",
            "extra": "mean: 209.61358872665474 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f38c6af4a0bd75fe6e527114227fd542cb890f81",
          "message": "Merge pull request #159 from TeoZosa/dependabot/pip/black-21.5b0\n\n⬆️ Bump black from 21.4b2 to 21.5b0",
          "timestamp": "2021-05-06T13:04:20-07:00",
          "tree_id": "62e0f4962ab22c1f319188478f24a09aa4c7f5f6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/f38c6af4a0bd75fe6e527114227fd542cb890f81"
        },
        "date": 1620331702675,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14736.849020863638,
            "unit": "iter/sec",
            "range": "stddev: 0.00012783645751320152",
            "extra": "mean: 67.85711101364028 usec\nrounds: 6882"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3963602.3767345897,
            "unit": "iter/sec",
            "range": "stddev: 1.7875640456366074e-8",
            "extra": "mean: 252.29574133619474 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13311.33517160497,
            "unit": "iter/sec",
            "range": "stddev: 0.00006146338417802319",
            "extra": "mean: 75.12394415048212 usec\nrounds: 8881"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 125973.61959080513,
            "unit": "iter/sec",
            "range": "stddev: 4.4149666092778603e-7",
            "extra": "mean: 7.938169937866819 usec\nrounds: 41321"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15621.582365283555,
            "unit": "iter/sec",
            "range": "stddev: 0.00002188478468599798",
            "extra": "mean: 64.01400169436987 usec\nrounds: 28327"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3936093.6837534043,
            "unit": "iter/sec",
            "range": "stddev: 7.93590606607229e-7",
            "extra": "mean: 254.0589935972714 nsec\nrounds: 196040"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "f2bbcfeb5b235cd95049dcb39fec1a897440f049",
          "message": ":construction_worker: Make `cruft` pre-commit hook always succeed\n\nThe previous behavior of failing downstream projects failing CI when\nthey got out of sync with the upstream template project was too\nrestrictive. Since not all template project updates are relevant (e.g.,\nmeta-project dependency updates) project maintainers should be\nresponsible not only for merging template updates themselves, but also\nwhen they choose to merge the updates. Therefore, this hook simply logs\nthe `cruft` pre-commit hook output for transparency and maintain\nauditability.",
          "timestamp": "2021-05-07T09:32:53-07:00",
          "tree_id": "ae14764c42b2bf0e419013895562dfa717966a66",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/f2bbcfeb5b235cd95049dcb39fec1a897440f049"
        },
        "date": 1620405449692,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14829.928765181581,
            "unit": "iter/sec",
            "range": "stddev: 0.00003277084296651204",
            "extra": "mean: 67.43120724543519 usec\nrounds: 1877"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3833288.266989525,
            "unit": "iter/sec",
            "range": "stddev: 6.142507785129795e-7",
            "extra": "mean: 260.8726321503306 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11920.198232016868,
            "unit": "iter/sec",
            "range": "stddev: 0.00010287927109223095",
            "extra": "mean: 83.89122232162765 usec\nrounds: 8969"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 113599.3229078192,
            "unit": "iter/sec",
            "range": "stddev: 0.000025999239697113364",
            "extra": "mean: 8.802869369313544 usec\nrounds: 44844"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13858.06878237279,
            "unit": "iter/sec",
            "range": "stddev: 0.0001316923605535736",
            "extra": "mean: 72.16012676109544 usec\nrounds: 13624"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3838080.429049754,
            "unit": "iter/sec",
            "range": "stddev: 6.294900216491171e-7",
            "extra": "mean: 260.54691101102935 nsec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "f3b2455a318ae9c8762b2604b1a394a432fe4d1a",
          "message": ":construction_worker: Re-enable `sphinx-icontract` sphinx plugin for docs\n\nRemove resolved TODO.",
          "timestamp": "2021-05-07T09:50:14-07:00",
          "tree_id": "34680b07667b1c79f8101c74e4902a964db86c97",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/f3b2455a318ae9c8762b2604b1a394a432fe4d1a"
        },
        "date": 1620406465921,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15825.901544475339,
            "unit": "iter/sec",
            "range": "stddev: 0.000022851703268156887",
            "extra": "mean: 63.18755346668321 usec\nrounds: 7023"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4225908.971468003,
            "unit": "iter/sec",
            "range": "stddev: 4.224745234010975e-8",
            "extra": "mean: 236.63548049713992 nsec\nrounds: 185151"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13343.622103624914,
            "unit": "iter/sec",
            "range": "stddev: 0.00011892477660324359",
            "extra": "mean: 74.94217029185359 usec\nrounds: 6988"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 131360.68147568053,
            "unit": "iter/sec",
            "range": "stddev: 0.000006666423126842398",
            "extra": "mean: 7.61262798552956 usec\nrounds: 31445"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15863.602427009955,
            "unit": "iter/sec",
            "range": "stddev: 0.00003218331818414031",
            "extra": "mean: 63.03738413775191 usec\nrounds: 13227"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4272240.222934092,
            "unit": "iter/sec",
            "range": "stddev: 6.781347828589852e-7",
            "extra": "mean: 234.06923483176817 nsec\nrounds: 192271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "30ee29c9e4af3670497d09d83eed71089e90fd11",
          "message": ":green_heart: Add `flakehell` pre-commit hook `flake8` compatibility fix",
          "timestamp": "2021-05-07T10:06:12-07:00",
          "tree_id": "87fcfbdff77dfdd17673d49123e0b727cebc90aa",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/30ee29c9e4af3670497d09d83eed71089e90fd11"
        },
        "date": 1620407427518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14755.775029170472,
            "unit": "iter/sec",
            "range": "stddev: 0.00011792217514872936",
            "extra": "mean: 67.77007632761512 usec\nrounds: 12407"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3848854.6846742583,
            "unit": "iter/sec",
            "range": "stddev: 8.372692425781788e-7",
            "extra": "mean: 259.81755143468956 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12253.49530259077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000663911662532041",
            "extra": "mean: 81.60936739320158 usec\nrounds: 8348"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 117079.86177458272,
            "unit": "iter/sec",
            "range": "stddev: 0.000011504901331375062",
            "extra": "mean: 8.541178515612952 usec\nrounds: 30031"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15062.427490769622,
            "unit": "iter/sec",
            "range": "stddev: 0.00005799476490270738",
            "extra": "mean: 66.39036108972529 usec\nrounds: 13210"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3713628.990637781,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012918714319473215",
            "extra": "mean: 269.2783803985383 nsec\nrounds: 169492"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "f3b2455a318ae9c8762b2604b1a394a432fe4d1a",
          "message": ":construction_worker: Re-enable `sphinx-icontract` sphinx plugin for docs\n\nRemove resolved TODO.",
          "timestamp": "2021-05-07T09:50:14-07:00",
          "tree_id": "34680b07667b1c79f8101c74e4902a964db86c97",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/f3b2455a318ae9c8762b2604b1a394a432fe4d1a"
        },
        "date": 1620407970947,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15471.32261644034,
            "unit": "iter/sec",
            "range": "stddev: 0.00003824731069423921",
            "extra": "mean: 64.63571504464439 usec\nrounds: 12988"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 2943521.77996219,
            "unit": "iter/sec",
            "range": "stddev: 6.391004002087813e-7",
            "extra": "mean: 339.72909825482765 nsec\nrounds: 4581"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12978.438253105056,
            "unit": "iter/sec",
            "range": "stddev: 0.0001261668639181136",
            "extra": "mean: 77.05087318659106 usec\nrounds: 9234"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 134453.7916092793,
            "unit": "iter/sec",
            "range": "stddev: 8.652690443450137e-7",
            "extra": "mean: 7.437499441488307 usec\nrounds: 34014"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15115.490608601354,
            "unit": "iter/sec",
            "range": "stddev: 0.0000935826561328625",
            "extra": "mean: 66.15729690116427 usec\nrounds: 13038"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3021302.152263504,
            "unit": "iter/sec",
            "range": "stddev: 2.908743154913773e-8",
            "extra": "mean: 330.98311575716394 nsec\nrounds: 5064"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "098e42ef2221ffbcb6eeb352a2820ca7e6725599",
          "message": ":recycle: `pyupgrade` auto-fix for `subprocess.run()`\n\nsee: https://docs.python.org/3/library/subprocess.html",
          "timestamp": "2021-05-07T10:23:14-07:00",
          "tree_id": "0c3d6386a2a58a7bdd6a8f300df12e7b93d21db6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/098e42ef2221ffbcb6eeb352a2820ca7e6725599"
        },
        "date": 1620408454956,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14504.45992375551,
            "unit": "iter/sec",
            "range": "stddev: 0.00006119329026314967",
            "extra": "mean: 68.94431128470993 usec\nrounds: 12034"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3903513.502245373,
            "unit": "iter/sec",
            "range": "stddev: 3.839190313767181e-7",
            "extra": "mean: 256.17946483979927 nsec\nrounds: 48544"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11720.277677527636,
            "unit": "iter/sec",
            "range": "stddev: 0.000094939283433547",
            "extra": "mean: 85.32221057504395 usec\nrounds: 4350"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 118799.87609890154,
            "unit": "iter/sec",
            "range": "stddev: 0.000010309623624922987",
            "extra": "mean: 8.417517196461507 usec\nrounds: 47394"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14930.498021325846,
            "unit": "iter/sec",
            "range": "stddev: 0.00003349949385724026",
            "extra": "mean: 66.97700227893664 usec\nrounds: 7899"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3670788.868388839,
            "unit": "iter/sec",
            "range": "stddev: 5.536051011469723e-7",
            "extra": "mean: 272.42100699703997 nsec\nrounds: 13587"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "770cc4e095f92d7d196ec0211fe79b9b2dcac00a",
          "message": ":arrow_up: Upgrade dependencies; make `xdoctest` `[all]` package install",
          "timestamp": "2021-05-07T23:26:19-07:00",
          "tree_id": "0b7c4145b51a5bb43d12c9a05e8830ac1340d498",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/770cc4e095f92d7d196ec0211fe79b9b2dcac00a"
        },
        "date": 1620455528921,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15308.519752740809,
            "unit": "iter/sec",
            "range": "stddev: 0.00003147039004648038",
            "extra": "mean: 65.32310217785503 usec\nrounds: 12253"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3802285.20374005,
            "unit": "iter/sec",
            "range": "stddev: 5.496513531897051e-7",
            "extra": "mean: 262.9997347428016 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12316.695774747906,
            "unit": "iter/sec",
            "range": "stddev: 0.00006108348777554317",
            "extra": "mean: 81.19060649774534 usec\nrounds: 8803"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 120409.33287888386,
            "unit": "iter/sec",
            "range": "stddev: 0.000017363008545050507",
            "extra": "mean: 8.30500407311342 usec\nrounds: 41494"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14670.284148889039,
            "unit": "iter/sec",
            "range": "stddev: 0.00006820820196720447",
            "extra": "mean: 68.16500552075051 usec\nrounds: 13405"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3745666.1187554323,
            "unit": "iter/sec",
            "range": "stddev: 7.347385454459898e-7",
            "extra": "mean: 266.97521036152835 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b546618988927965655ea7aaed42ee14fe75a34f",
          "message": "Merge pull request #168 from TeoZosa/add-jupyter-notebook-tooling\n\n✨ Add Jupyter Notebook Tooling",
          "timestamp": "2021-05-12T19:40:59-07:00",
          "tree_id": "4e3fe163d1b0d43cde2e3c5c00cc61736a5293aa",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/b546618988927965655ea7aaed42ee14fe75a34f"
        },
        "date": 1620873980479,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14694.560360893915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000420619967086068",
            "extra": "mean: 68.05239322853528 usec\nrounds: 7502"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3748308.5488212877,
            "unit": "iter/sec",
            "range": "stddev: 7.791242107096251e-7",
            "extra": "mean: 266.7870019170394 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12200.686013924422,
            "unit": "iter/sec",
            "range": "stddev: 0.00004968616376014531",
            "extra": "mean: 81.96260430427584 usec\nrounds: 8039"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 112346.68819563188,
            "unit": "iter/sec",
            "range": "stddev: 0.000006338117601028613",
            "extra": "mean: 8.901018944667749 usec\nrounds: 42017"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14791.565996985302,
            "unit": "iter/sec",
            "range": "stddev: 0.00006106225173082194",
            "extra": "mean: 67.60609391891379 usec\nrounds: 9785"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3771963.854065191,
            "unit": "iter/sec",
            "range": "stddev: 4.512606210258261e-7",
            "extra": "mean: 265.11388727181503 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "fc9aa25970f3f04209052cc427a3e00e5bcfb231",
          "message": ":bug: Fix Python versions `3.7` & `3.8` type annotation compatibility",
          "timestamp": "2021-05-12T20:02:08-07:00",
          "tree_id": "e3147fcbdcc162bb5f65b40adf5babb9fa936f24",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/fc9aa25970f3f04209052cc427a3e00e5bcfb231"
        },
        "date": 1620875229111,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15187.68022356845,
            "unit": "iter/sec",
            "range": "stddev: 0.000020478776051067612",
            "extra": "mean: 65.8428400703477 usec\nrounds: 10267"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4571236.373016103,
            "unit": "iter/sec",
            "range": "stddev: 1.7774885513966595e-7",
            "extra": "mean: 218.75919738106185 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12732.456969324796,
            "unit": "iter/sec",
            "range": "stddev: 0.000023866189354038734",
            "extra": "mean: 78.53943684311781 usec\nrounds: 8376"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 140636.02062194352,
            "unit": "iter/sec",
            "range": "stddev: 0.000005153190461995527",
            "extra": "mean: 7.110553865059869 usec\nrounds: 53764"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15214.061426183309,
            "unit": "iter/sec",
            "range": "stddev: 0.000018782469875896053",
            "extra": "mean: 65.72866849866966 usec\nrounds: 8190"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4750163.780484462,
            "unit": "iter/sec",
            "range": "stddev: 2.435942798893582e-7",
            "extra": "mean: 210.51905707090623 nsec\nrounds: 54055"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff9d2fdbf14b3d148c19a7383028690364f5721b",
          "message": "Merge pull request #165 from TeoZosa/dependabot/github_actions/ahmadnassri/action-dependabot-auto-merge-2.4\n\n⬆️ Bump ahmadnassri/action-dependabot-auto-merge from 2 to 2.4",
          "timestamp": "2021-05-13T08:56:55-07:00",
          "tree_id": "32942ca472a856c80ddc8bdcc5bf5f8c518a90f6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/ff9d2fdbf14b3d148c19a7383028690364f5721b"
        },
        "date": 1620921714938,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 12879.793885882445,
            "unit": "iter/sec",
            "range": "stddev: 0.00016674023163659144",
            "extra": "mean: 77.64099401436083 usec\nrounds: 9355"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4034719.7634767545,
            "unit": "iter/sec",
            "range": "stddev: 5.731712025047369e-7",
            "extra": "mean: 247.84868804321778 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11962.223907981275,
            "unit": "iter/sec",
            "range": "stddev: 0.00006003477207679991",
            "extra": "mean: 83.59649574296911 usec\nrounds: 7752"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 113159.9931468181,
            "unit": "iter/sec",
            "range": "stddev: 0.00004013565235285991",
            "extra": "mean: 8.837045427376102 usec\nrounds: 38611"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14563.029531910404,
            "unit": "iter/sec",
            "range": "stddev: 0.00010214002265293932",
            "extra": "mean: 68.66703097791618 usec\nrounds: 7231"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3998395.559834054,
            "unit": "iter/sec",
            "range": "stddev: 6.731715742735611e-7",
            "extra": "mean: 250.10031774865212 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f913ced25a753d99fb1a865850541eab0ce9886",
          "message": "Merge pull request #167 from TeoZosa/dependabot/pip/black-21.5b1\n\n⬆️ Bump black from 21.5b0 to 21.5b1",
          "timestamp": "2021-05-13T08:57:18-07:00",
          "tree_id": "ba72ee7f96b87ffb5e716f9b611ea87eac57a256",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/4f913ced25a753d99fb1a865850541eab0ce9886"
        },
        "date": 1620921761940,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15164.705409525879,
            "unit": "iter/sec",
            "range": "stddev: 0.00002396016921922676",
            "extra": "mean: 65.94259321198808 usec\nrounds: 12316"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3727781.7554403185,
            "unit": "iter/sec",
            "range": "stddev: 5.262235085680598e-7",
            "extra": "mean: 268.2560475917794 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11992.698160108795,
            "unit": "iter/sec",
            "range": "stddev: 0.00007724904864103748",
            "extra": "mean: 83.38407142825382 usec\nrounds: 7924"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 112232.07169412766,
            "unit": "iter/sec",
            "range": "stddev: 0.00003122610352575692",
            "extra": "mean: 8.91010907047458 usec\nrounds: 38168"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14853.079791604336,
            "unit": "iter/sec",
            "range": "stddev: 0.00003842804277389614",
            "extra": "mean: 67.3261043521255 usec\nrounds: 12707"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3702175.5300242603,
            "unit": "iter/sec",
            "range": "stddev: 7.111588159769289e-7",
            "extra": "mean: 270.11144984604056 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "f5a07b88d9d27cc0df9e84e06e90afddc153fae8",
          "message": ":memo: Add docstrings to `conftest.py`",
          "timestamp": "2021-05-19T12:12:49-07:00",
          "tree_id": "87bd617e5ad6a621c4d35053e01e42ca9bac5e2d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/f5a07b88d9d27cc0df9e84e06e90afddc153fae8"
        },
        "date": 1621452116144,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 13424.203573071962,
            "unit": "iter/sec",
            "range": "stddev: 0.00015764465989179642",
            "extra": "mean: 74.49231491139868 usec\nrounds: 10549"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3809048.4505386725,
            "unit": "iter/sec",
            "range": "stddev: 7.628310773203759e-7",
            "extra": "mean: 262.532759292831 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11443.857580450265,
            "unit": "iter/sec",
            "range": "stddev: 0.00007778213203357286",
            "extra": "mean: 87.38312172884054 usec\nrounds: 9209"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 105642.049530738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000645713500005885",
            "extra": "mean: 9.46592767219114 usec\nrounds: 42017"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13161.593823673304,
            "unit": "iter/sec",
            "range": "stddev: 0.00014587809798648153",
            "extra": "mean: 75.97864007939029 usec\nrounds: 13089"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3759373.145195249,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010658364126712314",
            "extra": "mean: 266.0017937506609 nsec\nrounds: 200000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "ed6b76c280800c7096e67fff178176df3e8e4bcc",
          "message": ":fire: Remove inactive Dependabot badge\n\nSee: dependabot/dependabot-core#1912",
          "timestamp": "2021-05-19T12:40:17-07:00",
          "tree_id": "4392ed658e7558b3cf2ee7fb74ba72715936277c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/ed6b76c280800c7096e67fff178176df3e8e4bcc"
        },
        "date": 1621453518703,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15475.161860910437,
            "unit": "iter/sec",
            "range": "stddev: 0.000025428608457884105",
            "extra": "mean: 64.61967952179906 usec\nrounds: 9776"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4672058.365216205,
            "unit": "iter/sec",
            "range": "stddev: 1.5167246924634091e-7",
            "extra": "mean: 214.03842200368658 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12707.251585709193,
            "unit": "iter/sec",
            "range": "stddev: 0.00001666852863572615",
            "extra": "mean: 78.69522321605864 usec\nrounds: 9390"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 133065.11288309723,
            "unit": "iter/sec",
            "range": "stddev: 0.00002512834370966929",
            "extra": "mean: 7.515117812123588 usec\nrounds: 48781"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15484.709741960763,
            "unit": "iter/sec",
            "range": "stddev: 0.00003669468028572159",
            "extra": "mean: 64.57983498974997 usec\nrounds: 13987"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4497754.146773392,
            "unit": "iter/sec",
            "range": "stddev: 1.748831136402825e-7",
            "extra": "mean: 222.3331839329355 nsec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b9c5f62e948b89addb18d9681a8c826fa3b479d",
          "message": "Merge pull request #172 from TeoZosa/make-jupyter-support-conditionally-included\n\n✨ Make Jupyter Support Conditionally Included",
          "timestamp": "2021-05-19T19:59:01-07:00",
          "tree_id": "0e4e3deb640e4f22797f7d9d205238b498ed4c13",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/2b9c5f62e948b89addb18d9681a8c826fa3b479d"
        },
        "date": 1621479919099,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15184.18329609748,
            "unit": "iter/sec",
            "range": "stddev: 0.000012876049803121754",
            "extra": "mean: 65.85800372002964 usec\nrounds: 12904"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4212428.43006957,
            "unit": "iter/sec",
            "range": "stddev: 4.317859619992252e-7",
            "extra": "mean: 237.39275731350156 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12887.208681140191,
            "unit": "iter/sec",
            "range": "stddev: 0.00002498078015968689",
            "extra": "mean: 77.5963224265509 usec\nrounds: 8985"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 131072.84050409799,
            "unit": "iter/sec",
            "range": "stddev: 0.00000719698484242357",
            "extra": "mean: 7.629345607786191 usec\nrounds: 42554"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15207.711822638352,
            "unit": "iter/sec",
            "range": "stddev: 0.00001712784411801172",
            "extra": "mean: 65.75611187683015 usec\nrounds: 11468"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4333820.442682585,
            "unit": "iter/sec",
            "range": "stddev: 4.02462534969865e-7",
            "extra": "mean: 230.74329295056262 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e25e61fa6b5b6745843db338a58313ef1bdd2730",
          "message": "Merge pull request #173 from TeoZosa/make-package-support-conditionally-included\n\n✨ Make Package Support Conditionally Included",
          "timestamp": "2021-05-19T22:04:11-07:00",
          "tree_id": "a94f0e98944dbee5a3a85460b94216337e59326c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/e25e61fa6b5b6745843db338a58313ef1bdd2730"
        },
        "date": 1621487334896,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14751.043784441752,
            "unit": "iter/sec",
            "range": "stddev: 0.000060631163897096865",
            "extra": "mean: 67.79181287867384 usec\nrounds: 12377"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4520133.361228253,
            "unit": "iter/sec",
            "range": "stddev: 2.8494387086646697e-7",
            "extra": "mean: 221.2324106578854 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12877.759710894225,
            "unit": "iter/sec",
            "range": "stddev: 0.000027449309831302125",
            "extra": "mean: 77.65325821027923 usec\nrounds: 8191"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 133616.81806044048,
            "unit": "iter/sec",
            "range": "stddev: 0.000032505900445258864",
            "extra": "mean: 7.484087815559702 usec\nrounds: 36497"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15194.137492497573,
            "unit": "iter/sec",
            "range": "stddev: 0.000029505022559976842",
            "extra": "mean: 65.81485790119848 usec\nrounds: 13948"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4773992.500580821,
            "unit": "iter/sec",
            "range": "stddev: 1.7940550006727702e-7",
            "extra": "mean: 209.46828045466802 nsec\nrounds: 54055"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "6babf43a20431ae0f6a50dfcc81ca6611c6bb601",
          "message": ":recycle: Rename `provision_environment` target to `provision-environment`",
          "timestamp": "2021-05-19T22:07:24-07:00",
          "tree_id": "ec88a629e2f09c30e1cf7abc7ee966e4d638acfa",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/6babf43a20431ae0f6a50dfcc81ca6611c6bb601"
        },
        "date": 1621487514121,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15852.574176793963,
            "unit": "iter/sec",
            "range": "stddev: 0.00001091788809169289",
            "extra": "mean: 63.081237712413014 usec\nrounds: 7711"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5074375.9850073755,
            "unit": "iter/sec",
            "range": "stddev: 5.2236837317304264e-8",
            "extra": "mean: 197.06856625416452 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14412.990955686031,
            "unit": "iter/sec",
            "range": "stddev: 0.000006138745556857041",
            "extra": "mean: 69.38185162778393 usec\nrounds: 9921"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 154629.14905661042,
            "unit": "iter/sec",
            "range": "stddev: 3.947356855478571e-7",
            "extra": "mean: 6.467085967302941 usec\nrounds: 38759"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16386.883274145643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047281772473131905",
            "extra": "mean: 61.02441710668355 usec\nrounds: 14205"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4948569.529886741,
            "unit": "iter/sec",
            "range": "stddev: 1.0454540231708984e-7",
            "extra": "mean: 202.07859947390716 nsec\nrounds: 200000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a947d6fa33a6552348376f97f5b4d105205c56b",
          "message": "Merge pull request #175 from TeoZosa/add-docker-container-support\n\n✨ Add Docker Container Functionality and Lifecycle Management Facilities",
          "timestamp": "2021-05-21T19:36:52-07:00",
          "tree_id": "afb24619cd347a93876a9f61e552dd02e3384c6f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/1a947d6fa33a6552348376f97f5b4d105205c56b"
        },
        "date": 1621651273173,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16643.303725182683,
            "unit": "iter/sec",
            "range": "stddev: 0.000008398225071273393",
            "extra": "mean: 60.084224653481385 usec\nrounds: 12063"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5110210.967631243,
            "unit": "iter/sec",
            "range": "stddev: 1.8024933066997238e-7",
            "extra": "mean: 195.68663727134486 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14175.972882649112,
            "unit": "iter/sec",
            "range": "stddev: 0.00007468014419123656",
            "extra": "mean: 70.54189566234037 usec\nrounds: 9268"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 153421.10916719015,
            "unit": "iter/sec",
            "range": "stddev: 8.878760661186715e-7",
            "extra": "mean: 6.518007889711273 usec\nrounds: 45249"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16617.529009979324,
            "unit": "iter/sec",
            "range": "stddev: 0.000005524897362129444",
            "extra": "mean: 60.17741864024851 usec\nrounds: 13680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5026613.809252387,
            "unit": "iter/sec",
            "range": "stddev: 1.492140051449092e-8",
            "extra": "mean: 198.94108398772073 nsec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "d36318a328e0df7dd7f412cb1db42d161087c4f6",
          "message": ":boom: Enforce type annotations across codebase",
          "timestamp": "2021-05-21T19:38:42-07:00",
          "tree_id": "863c32e9846cee7edb8196923baa50ded4cf78a7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/d36318a328e0df7dd7f412cb1db42d161087c4f6"
        },
        "date": 1621652088662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 13660.755416962578,
            "unit": "iter/sec",
            "range": "stddev: 0.0002544592807711389",
            "extra": "mean: 73.20239397290567 usec\nrounds: 1759"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3881637.140175777,
            "unit": "iter/sec",
            "range": "stddev: 7.903649837381764e-7",
            "extra": "mean: 257.62325634486984 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12165.725688482702,
            "unit": "iter/sec",
            "range": "stddev: 0.00010030041030378034",
            "extra": "mean: 82.19813808120797 usec\nrounds: 9183"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 119774.4643574847,
            "unit": "iter/sec",
            "range": "stddev: 0.00001423891883277113",
            "extra": "mean: 8.349025022690574 usec\nrounds: 35088"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14923.156621748856,
            "unit": "iter/sec",
            "range": "stddev: 0.00005661224454081313",
            "extra": "mean: 67.00995140281582 usec\nrounds: 11050"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4054341.4421157725,
            "unit": "iter/sec",
            "range": "stddev: 4.349121072777136e-7",
            "extra": "mean: 246.64918193913527 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "8e0f18b8306d23ec33de632c96553f07c4651b06",
          "message": ":boom: Enforce type annotations across codebase",
          "timestamp": "2021-05-21T20:16:46-07:00",
          "tree_id": "874ee3f610ca9e1a899c529ddfec943300bb6766",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/8e0f18b8306d23ec33de632c96553f07c4651b06"
        },
        "date": 1621653691757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15351.61006136835,
            "unit": "iter/sec",
            "range": "stddev: 0.00006797446324919695",
            "extra": "mean: 65.13974729702495 usec\nrounds: 11654"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4016369.5727682174,
            "unit": "iter/sec",
            "range": "stddev: 5.2943833581271414e-8",
            "extra": "mean: 248.98107155780085 nsec\nrounds: 5173"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13241.070667857633,
            "unit": "iter/sec",
            "range": "stddev: 0.000021129580668770273",
            "extra": "mean: 75.52259368477466 usec\nrounds: 8203"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 135500.57360274816,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011753172173020228",
            "extra": "mean: 7.380042559315914 usec\nrounds: 44244"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14426.358545961844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000786268625984123",
            "extra": "mean: 69.31756179593326 usec\nrounds: 13140"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4236923.57512974,
            "unit": "iter/sec",
            "range": "stddev: 5.41214190451725e-8",
            "extra": "mean: 236.02030630665087 nsec\nrounds: 5308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "2e7aa30e59c676ffd4d544b91f0583c7f45d4d55",
          "message": ":boom: Enforce type annotations across codebase",
          "timestamp": "2021-05-22T10:42:16-07:00",
          "tree_id": "2d5590ff9b582011914e96f19787647e11370f48",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/2e7aa30e59c676ffd4d544b91f0583c7f45d4d55"
        },
        "date": 1621705673140,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14625.112138570263,
            "unit": "iter/sec",
            "range": "stddev: 0.000021999224919347694",
            "extra": "mean: 68.37554410011923 usec\nrounds: 10941"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4714247.837443238,
            "unit": "iter/sec",
            "range": "stddev: 1.778656869440024e-7",
            "extra": "mean: 212.1229164189497 nsec\nrounds: 52081"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12441.356991559862,
            "unit": "iter/sec",
            "range": "stddev: 0.000027543166342765622",
            "extra": "mean: 80.3770843227466 usec\nrounds: 4803"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 141037.44582392165,
            "unit": "iter/sec",
            "range": "stddev: 0.000001865837029419198",
            "extra": "mean: 7.090315583624871 usec\nrounds: 33221"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14948.687944954543,
            "unit": "iter/sec",
            "range": "stddev: 0.000035733142685269394",
            "extra": "mean: 66.89550304898286 usec\nrounds: 14104"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5014669.903302982,
            "unit": "iter/sec",
            "range": "stddev: 3.600690548496329e-8",
            "extra": "mean: 199.4149204798438 nsec\nrounds: 52629"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "ec4955a3fb760cced4f6e073adde9c0077b2860a",
          "message": ":boom: Enforce type annotations across codebase",
          "timestamp": "2021-05-22T10:53:12-07:00",
          "tree_id": "3a2d680a476429153ee10eb404299a9deabfbab4",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/ec4955a3fb760cced4f6e073adde9c0077b2860a"
        },
        "date": 1621706284532,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15790.246737558735,
            "unit": "iter/sec",
            "range": "stddev: 0.000027118061850262",
            "extra": "mean: 63.33023268226687 usec\nrounds: 1689"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4228967.651989495,
            "unit": "iter/sec",
            "range": "stddev: 3.15358545288278e-7",
            "extra": "mean: 236.46432942788547 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13697.454167460963,
            "unit": "iter/sec",
            "range": "stddev: 0.00006696867244390081",
            "extra": "mean: 73.00626727962 usec\nrounds: 6959"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 138313.3322327476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010023066513778457",
            "extra": "mean: 7.229961015741013 usec\nrounds: 45249"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15896.882799097837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000427661850258406",
            "extra": "mean: 62.90541439084844 usec\nrounds: 8533"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4397670.424710298,
            "unit": "iter/sec",
            "range": "stddev: 4.474928871372438e-8",
            "extra": "mean: 227.39312031720635 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "a7f05ee965b63b413728081e8f7f557c93a2d4d1",
          "message": ":memo: :cookie: Add new feature documentation\n\nSee Also:\n    - #168\n    - #172\n    - #173\n    - #175",
          "timestamp": "2021-05-22T11:27:55-07:00",
          "tree_id": "4369777d5add0c29daad00047f08a5a4e98ef3d6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/a7f05ee965b63b413728081e8f7f557c93a2d4d1"
        },
        "date": 1621708399615,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15911.509098917157,
            "unit": "iter/sec",
            "range": "stddev: 0.000004862995771979253",
            "extra": "mean: 62.847589991828876 usec\nrounds: 4356"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 2293589.6700374894,
            "unit": "iter/sec",
            "range": "stddev: 2.4601931272208184e-7",
            "extra": "mean: 435.99777809587647 nsec\nrounds: 3601"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13580.971585573645,
            "unit": "iter/sec",
            "range": "stddev: 0.00003868093144158269",
            "extra": "mean: 73.63243444690274 usec\nrounds: 9191"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 131070.30402340413,
            "unit": "iter/sec",
            "range": "stddev: 0.000004801855636304241",
            "extra": "mean: 7.629493251357977 usec\nrounds: 34599"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15727.581436817178,
            "unit": "iter/sec",
            "range": "stddev: 0.000057507272732575026",
            "extra": "mean: 63.582566971109074 usec\nrounds: 13140"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3862884.5745840007,
            "unit": "iter/sec",
            "range": "stddev: 2.8334889722168454e-7",
            "extra": "mean: 258.87390127556847 nsec\nrounds: 121937"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "9ef0b896a1b31d413b6241e49a24d16b3601ab13",
          "message": ":memo: :cookie: Add new feature documentation\n\nSee Also:\n    - #168\n    - #172\n    - #173\n    - #175",
          "timestamp": "2021-05-22T11:46:00-07:00",
          "tree_id": "a711641f8fbe2e6659ce4c60ea4aad33832e635b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/9ef0b896a1b31d413b6241e49a24d16b3601ab13"
        },
        "date": 1621709498823,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14928.775113245903,
            "unit": "iter/sec",
            "range": "stddev: 0.00004676472951929022",
            "extra": "mean: 66.98473199671463 usec\nrounds: 11026"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4174672.101464778,
            "unit": "iter/sec",
            "range": "stddev: 5.089733582916616e-7",
            "extra": "mean: 239.53977119526195 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12362.058474950061,
            "unit": "iter/sec",
            "range": "stddev: 0.00006058382556619513",
            "extra": "mean: 80.89267673554178 usec\nrounds: 8773"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 131842.4412078065,
            "unit": "iter/sec",
            "range": "stddev: 0.00002071482742115448",
            "extra": "mean: 7.584811012592121 usec\nrounds: 50252"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14858.943191920025,
            "unit": "iter/sec",
            "range": "stddev: 0.00004365124625430942",
            "extra": "mean: 67.29953719345119 usec\nrounds: 7582"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4044465.6171671622,
            "unit": "iter/sec",
            "range": "stddev: 7.790255959616207e-7",
            "extra": "mean: 247.25145288800485 nsec\nrounds: 192345"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "608cd89c9afe9a5fb4c3cc2510dae40cbde131f2",
          "message": ":memo: :cookie: Add new feature documentation\n\nSee Also:\n    - #168\n    - #172\n    - #173\n    - #175",
          "timestamp": "2021-05-22T11:51:53-07:00",
          "tree_id": "b0eb04629bbffd68d4aa1e3c669f02e6fd49939c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/608cd89c9afe9a5fb4c3cc2510dae40cbde131f2"
        },
        "date": 1621709829981,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14208.896478020155,
            "unit": "iter/sec",
            "range": "stddev: 0.00004782191555344553",
            "extra": "mean: 70.37844223489891 usec\nrounds: 11919"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4000043.6361420285,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010738250590392296",
            "extra": "mean: 249.99727277102264 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11700.852342021362,
            "unit": "iter/sec",
            "range": "stddev: 0.0000522977337538886",
            "extra": "mean: 85.46385944968233 usec\nrounds: 6254"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 123466.91123039936,
            "unit": "iter/sec",
            "range": "stddev: 0.000016115369508740128",
            "extra": "mean: 8.099336008608153 usec\nrounds: 39371"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14749.222027810818,
            "unit": "iter/sec",
            "range": "stddev: 0.00003497158695832551",
            "extra": "mean: 67.80018621418955 usec\nrounds: 13624"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4068617.129849714,
            "unit": "iter/sec",
            "range": "stddev: 6.737173417934424e-7",
            "extra": "mean: 245.78375602450052 nsec\nrounds: 196040"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "f047862bc4819640c210860bb263d0e30ce32cba",
          "message": ":memo: :cookie: Update project preamble",
          "timestamp": "2021-05-22T13:15:11-07:00",
          "tree_id": "83b18814b22d66fd20e8c554e360828c538d0023",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/f047862bc4819640c210860bb263d0e30ce32cba"
        },
        "date": 1621714835603,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14520.628293183376,
            "unit": "iter/sec",
            "range": "stddev: 0.00011037316677596024",
            "extra": "mean: 68.86754345674176 usec\nrounds: 10965"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4298322.187841536,
            "unit": "iter/sec",
            "range": "stddev: 2.6963455908409325e-7",
            "extra": "mean: 232.64891655368746 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12527.444937839613,
            "unit": "iter/sec",
            "range": "stddev: 0.000020785056082549342",
            "extra": "mean: 79.82473720394994 usec\nrounds: 6545"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 129147.53654737808,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047419037658041615",
            "extra": "mean: 7.743082266483245 usec\nrounds: 18282"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14393.81170203897,
            "unit": "iter/sec",
            "range": "stddev: 0.00011965142200406931",
            "extra": "mean: 69.47430053280077 usec\nrounds: 9390"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4096025.116687214,
            "unit": "iter/sec",
            "range": "stddev: 3.9243487739112523e-7",
            "extra": "mean: 244.13912793796487 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}