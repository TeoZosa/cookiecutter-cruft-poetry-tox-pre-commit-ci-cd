window.BENCHMARK_DATA = {
  "lastUpdate": 1623207911877,
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
      }
    ]
  }
}