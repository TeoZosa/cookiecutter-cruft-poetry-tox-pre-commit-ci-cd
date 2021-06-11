window.BENCHMARK_DATA = {
  "lastUpdate": 1623433354081,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
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
          "id": "db0c65e5a6638929f0a05b1587502ef774acec58",
          "message": ":memo: Improve formatting, grammar, and narrative consistency",
          "timestamp": "2021-06-11T17:38:23Z",
          "tree_id": "c165752653a03fe71de41fadbc86a0701f83622f"
        },
        "date": 1623433352667,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14447.441777824788,
            "unit": "iter/sec",
            "range": "stddev: 0.00001052161694591451",
            "extra": "mean: 69.2164062938041 usec\nrounds: 13569"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5751175.520196384,
            "unit": "iter/sec",
            "range": "stddev: 2.9802695780636117e-8",
            "extra": "mean: 173.87749625938986 nsec\nrounds: 53476"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11396.080494355852,
            "unit": "iter/sec",
            "range": "stddev: 0.00002049828123384211",
            "extra": "mean: 87.74946794165511 usec\nrounds: 10091"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 170320.4434896778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013214442190574392",
            "extra": "mean: 5.871285792304812 usec\nrounds: 44053"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14286.819168649803,
            "unit": "iter/sec",
            "range": "stddev: 0.000009402302621143755",
            "extra": "mean: 69.99458649230642 usec\nrounds: 6411"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5900568.551435606,
            "unit": "iter/sec",
            "range": "stddev: 2.6888744014676237e-8",
            "extra": "mean: 169.4751940059652 nsec\nrounds: 62112"
          }
        ]
      }
    ]
  }
}