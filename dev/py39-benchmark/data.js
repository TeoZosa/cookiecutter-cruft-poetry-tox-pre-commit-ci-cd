window.BENCHMARK_DATA = {
  "lastUpdate": 1631117232256,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "5c4ef9ddef12a589a1beb1bc954a85d56ae151c7",
          "message": ":cookie: :memo: Document Make's role in project",
          "timestamp": "2021-09-08T16:00:15Z",
          "tree_id": "1d7fa17c4ee6f32210ea2326e9a800e54ee65540"
        },
        "date": 1631117124656,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15244.710908732457,
            "unit": "iter/sec",
            "range": "stddev: 0.000008427268957153543",
            "extra": "mean: 65.59652104830543 usec\nrounds: 6105"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5016873.150161893,
            "unit": "iter/sec",
            "range": "stddev: 1.3617596315907585e-8",
            "extra": "mean: 199.32734395872842 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12870.417575169475,
            "unit": "iter/sec",
            "range": "stddev: 0.000019643174261810705",
            "extra": "mean: 77.69755675443439 usec\nrounds: 5374"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 153527.3553509002,
            "unit": "iter/sec",
            "range": "stddev: 3.180564556577234e-7",
            "extra": "mean: 6.513497205201069 usec\nrounds: 38461"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15726.902496216586,
            "unit": "iter/sec",
            "range": "stddev: 0.000008679852055228866",
            "extra": "mean: 63.58531187184314 usec\nrounds: 6663"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5902438.40274553,
            "unit": "iter/sec",
            "range": "stddev: 2.200190518041849e-8",
            "extra": "mean: 169.42150544678535 nsec\nrounds: 55246"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "12f75286ea706a52440fc4ac2595871a37b568f3",
          "message": "Merge pull request #322 from TeoZosa/dependabot/pip/hypothesis-6.19.0",
          "timestamp": "2021-09-08T13:16:29Z",
          "tree_id": "3edaa062b64d944115361767d1622ae9bec94416"
        },
        "date": 1631117230304,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14712.91945911534,
            "unit": "iter/sec",
            "range": "stddev: 0.000009443736534258243",
            "extra": "mean: 67.96747598454726 usec\nrounds: 1624"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4309851.676706764,
            "unit": "iter/sec",
            "range": "stddev: 4.265575990100164e-8",
            "extra": "mean: 232.02654639068865 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13503.666149664794,
            "unit": "iter/sec",
            "range": "stddev: 0.000011791440755669756",
            "extra": "mean: 74.05396348789496 usec\nrounds: 5149"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 131586.69481570376,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030354463066064225",
            "extra": "mean: 7.599552533792029 usec\nrounds: 38461"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15062.154675307533,
            "unit": "iter/sec",
            "range": "stddev: 0.000014727271798517205",
            "extra": "mean: 66.39156359477383 usec\nrounds: 10504"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2107003.978196417,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011261983246429217",
            "extra": "mean: 474.60755193067746 nsec\nrounds: 11520"
          }
        ]
      }
    ]
  }
}