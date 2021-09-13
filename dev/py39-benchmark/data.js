window.BENCHMARK_DATA = {
  "lastUpdate": 1631543015327,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
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
          "id": "c25f26a23c36912a5aced16b38c6f2eb284e014b",
          "message": "Merge pull request #327 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.9.1",
          "timestamp": "2021-09-13T13:24:59Z",
          "tree_id": "4bd7edefd1a857f2c7ac30321315678fbf3cc7ae"
        },
        "date": 1631543012939,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15020.120046734792,
            "unit": "iter/sec",
            "range": "stddev: 0.00001433109577297177",
            "extra": "mean: 66.57736402162705 usec\nrounds: 7321"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4155330.6854732805,
            "unit": "iter/sec",
            "range": "stddev: 8.697500816592919e-8",
            "extra": "mean: 240.65473380842326 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11960.797594647891,
            "unit": "iter/sec",
            "range": "stddev: 0.0001333048985083767",
            "extra": "mean: 83.60646454275515 usec\nrounds: 9166"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 122208.55877749671,
            "unit": "iter/sec",
            "range": "stddev: 0.00002406988197423859",
            "extra": "mean: 8.182732944430553 usec\nrounds: 40984"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14261.12934820239,
            "unit": "iter/sec",
            "range": "stddev: 0.00006785652069874692",
            "extra": "mean: 70.12067386697181 usec\nrounds: 7083"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4090397.2023242936,
            "unit": "iter/sec",
            "range": "stddev: 2.556557933174407e-7",
            "extra": "mean: 244.47503519479702 nsec\nrounds: 196040"
          }
        ]
      }
    ]
  }
}