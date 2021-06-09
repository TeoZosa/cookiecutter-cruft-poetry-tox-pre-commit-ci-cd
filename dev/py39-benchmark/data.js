window.BENCHMARK_DATA = {
  "lastUpdate": 1623261547288,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "8690e232d2eeeb9bfb76e5242c6295005bcbf9a7",
          "message": "Merge pull request #205 from TeoZosa/make-separate-dependabot-trunk-push-check-workflow\n\n👷 Make Separate Dependabot Trunk Push Check Workflow",
          "timestamp": "2021-06-08T19:06:46Z",
          "tree_id": "5af6e99febf53321b1a9e43d656d48bdfbfbcf95"
        },
        "date": 1623179467923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15119.560774549956,
            "unit": "iter/sec",
            "range": "stddev: 0.000010586203512097799",
            "extra": "mean: 66.13948744352766 usec\nrounds: 7088"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4548933.409468841,
            "unit": "iter/sec",
            "range": "stddev: 6.130360526518398e-8",
            "extra": "mean: 219.83175175051883 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12253.295493199992,
            "unit": "iter/sec",
            "range": "stddev: 0.00006444574374586756",
            "extra": "mean: 81.61069816319646 usec\nrounds: 9747"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 146492.97737281033,
            "unit": "iter/sec",
            "range": "stddev: 0.000003749711069821738",
            "extra": "mean: 6.8262657905784625 usec\nrounds: 3879"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14815.22374733469,
            "unit": "iter/sec",
            "range": "stddev: 0.00000976611569444213",
            "extra": "mean: 67.49813685263467 usec\nrounds: 4092"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5060519.791198375,
            "unit": "iter/sec",
            "range": "stddev: 3.424186086275462e-8",
            "extra": "mean: 197.60815909448144 nsec\nrounds: 54055"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "faafc60d62dff61a6da2efd0426003aee3764cf4",
          "message": ":green_heart: Fix `yamllint` `(line-length)` errors\n\n```\n.github/workflows/release.yml\n  7:81      error    line too long (81 > 80 characters)  (line-length)\n````",
          "timestamp": "2021-06-08T22:26:38Z",
          "tree_id": "270e1514628e6688a649c67bd51095ebcbd3d4c9"
        },
        "date": 1623191512491,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15695.00679274682,
            "unit": "iter/sec",
            "range": "stddev: 0.00002689543198590891",
            "extra": "mean: 63.71453120123101 usec\nrounds: 12756"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3806893.5010769023,
            "unit": "iter/sec",
            "range": "stddev: 8.177294782390034e-7",
            "extra": "mean: 262.68136991946636 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12941.071928164672,
            "unit": "iter/sec",
            "range": "stddev: 0.00001526290966061231",
            "extra": "mean: 77.273351508357 usec\nrounds: 13718"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 120860.70804496614,
            "unit": "iter/sec",
            "range": "stddev: 0.00000762818566961395",
            "extra": "mean: 8.273987602554428 usec\nrounds: 22989"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15627.60896144282,
            "unit": "iter/sec",
            "range": "stddev: 0.00010199639513167187",
            "extra": "mean: 63.9893154779626 usec\nrounds: 7113"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3783464.706524407,
            "unit": "iter/sec",
            "range": "stddev: 2.075099054190815e-7",
            "extra": "mean: 264.30800273504116 nsec\nrounds: 185220"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "0e962742ab159f23089063d2cff4f4d879e36d40",
          "message": "Merge pull request #206 from TeoZosa/add-documentation-emoji-shortcode-conversion-feature\n\n✨ Add Documentation Emoji Shortcode Conversion Feature",
          "timestamp": "2021-06-09T02:03:43Z",
          "tree_id": "cd35015f1b75ede1637a1cd52fde3ae52f6ef3e1"
        },
        "date": 1623204488587,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16534.386508037434,
            "unit": "iter/sec",
            "range": "stddev: 0.000009022200886891964",
            "extra": "mean: 60.48001838555642 usec\nrounds: 7397"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5052073.30648337,
            "unit": "iter/sec",
            "range": "stddev: 1.2446851273079403e-8",
            "extra": "mean: 197.93853717765802 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14489.551216639255,
            "unit": "iter/sec",
            "range": "stddev: 0.000011915267487853873",
            "extra": "mean: 69.01525002731884 usec\nrounds: 9075"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 146000.73365825717,
            "unit": "iter/sec",
            "range": "stddev: 3.9984654024412783e-7",
            "extra": "mean: 6.849280650470515 usec\nrounds: 36900"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16607.04147575286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025927787898991805",
            "extra": "mean: 60.21542135967154 usec\nrounds: 14045"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5058357.625029177,
            "unit": "iter/sec",
            "range": "stddev: 1.4268470098992044e-8",
            "extra": "mean: 197.6926255774871 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "e19191be57f23fc5dfe08204ae6a7b0e213a6fd4",
          "message": "Merge pull request #207 from TeoZosa/mercari-production-readiness-checklist-reference\n\n📝 Add Mercari Microservice Production Readiness Checklist Documentation Templates",
          "timestamp": "2021-06-09T02:49:01Z",
          "tree_id": "408395b3e66759fffb90e633cf9e89546948061f"
        },
        "date": 1623207197076,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16582.443113189074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018832486265018253",
            "extra": "mean: 60.30474479388603 usec\nrounds: 6771"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5015693.819748918,
            "unit": "iter/sec",
            "range": "stddev: 2.113337274988489e-8",
            "extra": "mean: 199.3742114126228 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14492.259999425574,
            "unit": "iter/sec",
            "range": "stddev: 0.000006946359283262304",
            "extra": "mean: 69.00235022278352 usec\nrounds: 9434"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 145074.1790668074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031230269740615495",
            "extra": "mean: 6.893025391785914 usec\nrounds: 36232"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16601.24115520762,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012837517838048422",
            "extra": "mean: 60.23646007252364 usec\nrounds: 7138"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5020065.333111347,
            "unit": "iter/sec",
            "range": "stddev: 1.5873246967152974e-8",
            "extra": "mean: 199.20059474204587 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "9b3f8aa20ef6cb4518eaedd6775d964aee8da408",
          "message": ":wrench: Reorganize and section tox `precommit` testenv deps",
          "timestamp": "2021-06-09T02:59:55Z",
          "tree_id": "ba7595ae75318bf1f3095975a7cf73dfdc4aadc1"
        },
        "date": 1623207910950,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15020.609555423476,
            "unit": "iter/sec",
            "range": "stddev: 0.00003042221528400772",
            "extra": "mean: 66.57519432285164 usec\nrounds: 12788"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3987898.2615214335,
            "unit": "iter/sec",
            "range": "stddev: 4.4362401575059825e-7",
            "extra": "mean: 250.75865391280107 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11975.702790407304,
            "unit": "iter/sec",
            "range": "stddev: 0.00007066191546607059",
            "extra": "mean: 83.5024062889247 usec\nrounds: 8681"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 95692.19323515812,
            "unit": "iter/sec",
            "range": "stddev: 0.00007937676241103584",
            "extra": "mean: 10.4501732711106 usec\nrounds: 3180"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13453.766026914083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000898704779700003",
            "extra": "mean: 74.32863021398715 usec\nrounds: 2542"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3901841.9455025746,
            "unit": "iter/sec",
            "range": "stddev: 7.041593475623291e-7",
            "extra": "mean: 256.2892126251623 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "5f8b153759307cf8ceab119e3d5fcb00661345dd",
          "message": ":label: Type annotate `emojize_*` functions",
          "timestamp": "2021-06-09T03:18:46Z",
          "tree_id": "ce67d1bfa6434b135ec9d844fd0df94d8b6917a3"
        },
        "date": 1623209010387,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16363.425763551742,
            "unit": "iter/sec",
            "range": "stddev: 0.0000362890922245982",
            "extra": "mean: 61.11189762154954 usec\nrounds: 7189"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5323688.596569292,
            "unit": "iter/sec",
            "range": "stddev: 7.320515126586846e-9",
            "extra": "mean: 187.83968706289693 nsec\nrounds: 51544"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14119.103964143062,
            "unit": "iter/sec",
            "range": "stddev: 0.00004766651447727596",
            "extra": "mean: 70.82602426751757 usec\nrounds: 9766"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 151089.47055658986,
            "unit": "iter/sec",
            "range": "stddev: 3.6040885464218603e-7",
            "extra": "mean: 6.6185949048345805 usec\nrounds: 42195"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16624.33262700057,
            "unit": "iter/sec",
            "range": "stddev: 0.000006416408851969428",
            "extra": "mean: 60.152790637492444 usec\nrounds: 9634"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5062254.48295336,
            "unit": "iter/sec",
            "range": "stddev: 1.2524609780158703e-8",
            "extra": "mean: 197.54044435523465 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "56dfb4121618d0363e7d24e3620a1a106a6f4881",
          "message": ":heavy_plus_sign: Add emoji library type stubs",
          "timestamp": "2021-06-09T03:51:27Z",
          "tree_id": "37b61d1645f88031205a26f9d79b5f8108fe7cde"
        },
        "date": 1623211008616,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14958.077861395832,
            "unit": "iter/sec",
            "range": "stddev: 0.00001824944017036235",
            "extra": "mean: 66.85350947268593 usec\nrounds: 5596"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4375987.893945212,
            "unit": "iter/sec",
            "range": "stddev: 2.3117717223352494e-7",
            "extra": "mean: 228.51982780501714 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12006.44325999284,
            "unit": "iter/sec",
            "range": "stddev: 0.00018926356694192652",
            "extra": "mean: 83.28861248460989 usec\nrounds: 8170"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 134362.35119342597,
            "unit": "iter/sec",
            "range": "stddev: 0.000003552089939552944",
            "extra": "mean: 7.442561038251074 usec\nrounds: 47847"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15027.346912712053,
            "unit": "iter/sec",
            "range": "stddev: 0.000026351308966652504",
            "extra": "mean: 66.54534601540821 usec\nrounds: 8621"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4417574.462276627,
            "unit": "iter/sec",
            "range": "stddev: 1.5840337400823837e-7",
            "extra": "mean: 226.36856685467515 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "35ab42d60b7580791dfe777ac6bde772320d8d26",
          "message": ":heavy_plus_sign: Add emoji library type stubs",
          "timestamp": "2021-06-09T03:52:24Z",
          "tree_id": "de5e9704968b0aaf058deba0f497522d726c187a"
        },
        "date": 1623211023183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14452.6606141995,
            "unit": "iter/sec",
            "range": "stddev: 0.00011186220757633544",
            "extra": "mean: 69.19141234227257 usec\nrounds: 8961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4532819.727509118,
            "unit": "iter/sec",
            "range": "stddev: 3.585590014870903e-7",
            "extra": "mean: 220.61322975876902 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12703.214754954253,
            "unit": "iter/sec",
            "range": "stddev: 0.000017520097748936005",
            "extra": "mean: 78.72023100373077 usec\nrounds: 9515"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 135398.204420634,
            "unit": "iter/sec",
            "range": "stddev: 0.000012757988546461308",
            "extra": "mean: 7.3856223151479625 usec\nrounds: 42554"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14961.418097967826,
            "unit": "iter/sec",
            "range": "stddev: 0.000042213431916823125",
            "extra": "mean: 66.83858397993889 usec\nrounds: 9026"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4415621.928189948,
            "unit": "iter/sec",
            "range": "stddev: 1.583546764672745e-7",
            "extra": "mean: 226.46866427012804 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "5fab3a7a801296bebf55e4fcdbe2de8e3bc3877d",
          "message": ":heavy_plus_sign: Add `emoji` library type stubs",
          "timestamp": "2021-06-09T03:53:36Z",
          "tree_id": "de5e9704968b0aaf058deba0f497522d726c187a"
        },
        "date": 1623211106258,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15766.371210472133,
            "unit": "iter/sec",
            "range": "stddev: 0.000009406925149467905",
            "extra": "mean: 63.42613570685137 usec\nrounds: 7332"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4576477.112736221,
            "unit": "iter/sec",
            "range": "stddev: 6.740622051371295e-8",
            "extra": "mean: 218.50868590982637 nsec\nrounds: 64517"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14052.75152022017,
            "unit": "iter/sec",
            "range": "stddev: 0.000012426976269853351",
            "extra": "mean: 71.16044132432881 usec\nrounds: 6979"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 123999.12259559517,
            "unit": "iter/sec",
            "range": "stddev: 0.00002129836324650076",
            "extra": "mean: 8.064573192677761 usec\nrounds: 39683"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15184.577916791437,
            "unit": "iter/sec",
            "range": "stddev: 0.00010135437738972408",
            "extra": "mean: 65.85629218538753 usec\nrounds: 8190"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4475166.5664322395,
            "unit": "iter/sec",
            "range": "stddev: 5.6316213665420836e-8",
            "extra": "mean: 223.4553697959103 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "e86edc86da9ff59e49437101b13fd2dc9f95ac86",
          "message": ":rewind: :green_heart: Rollback Auto-Merge-Dependabot workflow to `on` `pull_request_target` event",
          "timestamp": "2021-06-09T06:17:16Z",
          "tree_id": "ae9519e47e47771a3d190905996ace5190d49118"
        },
        "date": 1623219751429,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15385.281004878658,
            "unit": "iter/sec",
            "range": "stddev: 0.000026273858705517212",
            "extra": "mean: 64.99718787605511 usec\nrounds: 11614"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4025379.754355006,
            "unit": "iter/sec",
            "range": "stddev: 4.0784744366571546e-7",
            "extra": "mean: 248.4237664582723 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12663.36129106398,
            "unit": "iter/sec",
            "range": "stddev: 0.00004847351147346491",
            "extra": "mean: 78.96797516988316 usec\nrounds: 8780"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 121191.24710185328,
            "unit": "iter/sec",
            "range": "stddev: 0.000009617590078567593",
            "extra": "mean: 8.251420988840604 usec\nrounds: 44443"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15454.561672471811,
            "unit": "iter/sec",
            "range": "stddev: 0.000022315976866386294",
            "extra": "mean: 64.70581445096784 usec\nrounds: 9259"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3863975.782286243,
            "unit": "iter/sec",
            "range": "stddev: 8.585863599182634e-7",
            "extra": "mean: 258.8007938830709 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "1e9261c97ce3ac6c020573be3093047983b2a283",
          "message": ":rewind: :green_heart: Rollback Auto-Merge-Dependabot workflow to `on` `pull_request_target` event\n\nFixes:\n```\nError: action triggered outside of a pull_request\n```",
          "timestamp": "2021-06-09T06:18:04Z",
          "tree_id": "ae9519e47e47771a3d190905996ace5190d49118"
        },
        "date": 1623219798162,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16012.446864606936,
            "unit": "iter/sec",
            "range": "stddev: 0.000007891417388168154",
            "extra": "mean: 62.45141722907739 usec\nrounds: 12468"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4307989.723114261,
            "unit": "iter/sec",
            "range": "stddev: 3.409321615958372e-8",
            "extra": "mean: 232.12683044114695 nsec\nrounds: 181786"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13875.647160889048,
            "unit": "iter/sec",
            "range": "stddev: 0.000015015749321144368",
            "extra": "mean: 72.06871062696635 usec\nrounds: 9372"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 133380.33930757816,
            "unit": "iter/sec",
            "range": "stddev: 9.786661816152865e-7",
            "extra": "mean: 7.497356845779023 usec\nrounds: 41836"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16033.133934132364,
            "unit": "iter/sec",
            "range": "stddev: 0.000003110014765338855",
            "extra": "mean: 62.37083804752207 usec\nrounds: 6329"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4289189.139677834,
            "unit": "iter/sec",
            "range": "stddev: 4.471867247438535e-8",
            "extra": "mean: 233.14430010800078 nsec\nrounds: 192271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "c1f1758d840366611a6036b3f8961a760ced7820",
          "message": ":memo: :cookie: Move `markdown-toc` documentation",
          "timestamp": "2021-06-09T06:22:59Z",
          "tree_id": "6837054248c1da5dc1efd7352aa5a20c4e131d32"
        },
        "date": 1623220096560,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14554.13467205283,
            "unit": "iter/sec",
            "range": "stddev: 0.00005581309789780984",
            "extra": "mean: 68.70899730783871 usec\nrounds: 6314"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4236415.08832388,
            "unit": "iter/sec",
            "range": "stddev: 8.666459313459567e-8",
            "extra": "mean: 236.0486352613347 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12502.696201480343,
            "unit": "iter/sec",
            "range": "stddev: 0.00004809176901207608",
            "extra": "mean: 79.9827480317084 usec\nrounds: 8636"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 122643.39877382871,
            "unit": "iter/sec",
            "range": "stddev: 0.00000536137749767335",
            "extra": "mean: 8.153720542628939 usec\nrounds: 43860"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14847.616786601297,
            "unit": "iter/sec",
            "range": "stddev: 0.000057349911923118666",
            "extra": "mean: 67.35087619599761 usec\nrounds: 8780"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4060400.91921971,
            "unit": "iter/sec",
            "range": "stddev: 3.2704640489824354e-7",
            "extra": "mean: 246.28109881094392 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "04810a674fd4913a957f6b3569ef69523bcdd6d1",
          "message": ":memo: :cookie: Remove backtick quotes from GitHub Actions",
          "timestamp": "2021-06-09T06:50:23Z",
          "tree_id": "e5ec8b0389df82d9c276048d2f1009c64f32cc29"
        },
        "date": 1623221719622,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16181.912317161461,
            "unit": "iter/sec",
            "range": "stddev: 0.000009923806453743222",
            "extra": "mean: 61.7973933117575 usec\nrounds: 7236"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4564432.722235224,
            "unit": "iter/sec",
            "range": "stddev: 5.4551615827035364e-8",
            "extra": "mean: 219.0852754008865 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14202.479500190635,
            "unit": "iter/sec",
            "range": "stddev: 0.000004825455606856172",
            "extra": "mean: 70.41024068977373 usec\nrounds: 5102"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 141544.45275092963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018249162364990364",
            "extra": "mean: 7.064918338832125 usec\nrounds: 40815"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15952.075893646967,
            "unit": "iter/sec",
            "range": "stddev: 0.000012875253065626642",
            "extra": "mean: 62.6877659476443 usec\nrounds: 13262"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4396497.1734086815,
            "unit": "iter/sec",
            "range": "stddev: 7.954159022509757e-8",
            "extra": "mean: 227.4538025517884 nsec\nrounds: 60238"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "0ca620bd0d8894fa91b1e8e6b023a89806683973",
          "message": ":memo: :cookie: Update Dockerfile conditional rendering documentation",
          "timestamp": "2021-06-09T16:45:16Z",
          "tree_id": "4820676be6483f0a034e19a133609b184d7bd316"
        },
        "date": 1623257445566,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16155.89864920632,
            "unit": "iter/sec",
            "range": "stddev: 0.000007565752134203088",
            "extra": "mean: 61.896897332240094 usec\nrounds: 7646"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4996982.879904266,
            "unit": "iter/sec",
            "range": "stddev: 1.3444673113970651e-8",
            "extra": "mean: 200.12075767187068 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14627.795225313075,
            "unit": "iter/sec",
            "range": "stddev: 0.000011642649194064579",
            "extra": "mean: 68.36300239352012 usec\nrounds: 9192"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 149779.88150779917,
            "unit": "iter/sec",
            "range": "stddev: 4.466582688216196e-7",
            "extra": "mean: 6.6764640880553054 usec\nrounds: 47394"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16656.328882611666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021019513550731068",
            "extra": "mean: 60.03723912079736 usec\nrounds: 9192"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4983055.811983977,
            "unit": "iter/sec",
            "range": "stddev: 1.3212400653012478e-8",
            "extra": "mean: 200.68007217498098 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "8be214abe760943487c59b452ec8885a52931905",
          "message": ":memo: :cookie: Add example project link",
          "timestamp": "2021-06-09T16:55:38Z",
          "tree_id": "87bd226b49f581257e82be1d0721dacfd1be2264"
        },
        "date": 1623258104450,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14687.986719026274,
            "unit": "iter/sec",
            "range": "stddev: 0.00003668278992626766",
            "extra": "mean: 68.08285023192708 usec\nrounds: 8827"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3936685.505552798,
            "unit": "iter/sec",
            "range": "stddev: 8.474539011538328e-7",
            "extra": "mean: 254.02079962691008 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11792.816450627071,
            "unit": "iter/sec",
            "range": "stddev: 0.000059059838685579974",
            "extra": "mean: 84.7973852715079 usec\nrounds: 8555"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 117398.02675809944,
            "unit": "iter/sec",
            "range": "stddev: 0.00002663141879511021",
            "extra": "mean: 8.518030733689557 usec\nrounds: 45455"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13982.704145275506,
            "unit": "iter/sec",
            "range": "stddev: 0.00004929351699976609",
            "extra": "mean: 71.51692473861584 usec\nrounds: 6989"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4011003.3611062127,
            "unit": "iter/sec",
            "range": "stddev: 4.781214855129286e-7",
            "extra": "mean: 249.31417652177814 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "3ea735f7fc5495619f4fee3f8c7c9ceb11682b44",
          "message": ":memo: :cookie: Update `cookiecutter-hypermodern-python` attribution admonition",
          "timestamp": "2021-06-09T17:09:05Z",
          "tree_id": "7e30b9c1cd035a37b9750f660cecb6dd0642bc36"
        },
        "date": 1623258874034,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14946.867715504728,
            "unit": "iter/sec",
            "range": "stddev: 0.00003300069377350464",
            "extra": "mean: 66.90364958289402 usec\nrounds: 11863"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3917810.0637786156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013140877870773846",
            "extra": "mean: 255.24463506939702 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12153.338769769876,
            "unit": "iter/sec",
            "range": "stddev: 0.00003355130255500372",
            "extra": "mean: 82.28191601861643 usec\nrounds: 5144"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 124853.27224713471,
            "unit": "iter/sec",
            "range": "stddev: 0.000013793248488457795",
            "extra": "mean: 8.009401612002598 usec\nrounds: 43669"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14896.242040397112,
            "unit": "iter/sec",
            "range": "stddev: 0.00006930142990747066",
            "extra": "mean: 67.13102521348004 usec\nrounds: 8091"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4088220.300588143,
            "unit": "iter/sec",
            "range": "stddev: 3.912430483894883e-7",
            "extra": "mean: 244.60521363195366 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "c724f4c36bd85924e4972372fec79a1ed25abdac",
          "message": ":memo: :cookie: Update `cookiecutter-hypermodern-python` attribution admonition",
          "timestamp": "2021-06-09T17:11:07Z",
          "tree_id": "d16171e8ac0af3407c281cbb9ff9b5be2071f425"
        },
        "date": 1623258991682,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14475.317166129094,
            "unit": "iter/sec",
            "range": "stddev: 0.00010808267736288201",
            "extra": "mean: 69.08311496896992 usec\nrounds: 10081"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4150681.031122807,
            "unit": "iter/sec",
            "range": "stddev: 2.763437836650064e-7",
            "extra": "mean: 240.92431880506285 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11859.698328632774,
            "unit": "iter/sec",
            "range": "stddev: 0.00010575525595472847",
            "extra": "mean: 84.31917678594807 usec\nrounds: 9141"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 122181.380835056,
            "unit": "iter/sec",
            "range": "stddev: 0.000013809183425758871",
            "extra": "mean: 8.184553105926941 usec\nrounds: 41323"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14792.673900657277,
            "unit": "iter/sec",
            "range": "stddev: 0.00006249139274618187",
            "extra": "mean: 67.60103053144213 usec\nrounds: 5568"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4129466.43132343,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016422786019914304",
            "extra": "mean: 242.16203633844594 nsec\nrounds: 192271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "ea2ae03c3922f1654d88259deda204f848067449",
          "message": ":memo: :cookie: Elaborate on \"Design Documentation\" documentation",
          "timestamp": "2021-06-09T17:31:38Z",
          "tree_id": "db1421fa8e50acf28a35d047fa7d47ce094b1f14"
        },
        "date": 1623261546403,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15106.985296238117,
            "unit": "iter/sec",
            "range": "stddev: 0.00004627563966829698",
            "extra": "mean: 66.19454380808963 usec\nrounds: 12315"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4255373.744938219,
            "unit": "iter/sec",
            "range": "stddev: 5.183336394691281e-8",
            "extra": "mean: 234.99698497449288 nsec\nrounds: 60238"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13210.47644682819,
            "unit": "iter/sec",
            "range": "stddev: 0.00010856408919910176",
            "extra": "mean: 75.6974969089853 usec\nrounds: 9058"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 134731.8008949411,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015809129297841257",
            "extra": "mean: 7.422152701571645 usec\nrounds: 37033"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15340.82478240904,
            "unit": "iter/sec",
            "range": "stddev: 0.000007535084548850252",
            "extra": "mean: 65.18554342310696 usec\nrounds: 9442"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4224339.022112543,
            "unit": "iter/sec",
            "range": "stddev: 4.8002665877293344e-8",
            "extra": "mean: 236.72342460320544 nsec\nrounds: 192271"
          }
        ]
      }
    ]
  }
}