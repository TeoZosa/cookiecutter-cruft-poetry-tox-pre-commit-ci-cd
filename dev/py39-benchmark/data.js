window.BENCHMARK_DATA = {
  "lastUpdate": 1627308311963,
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
          "id": "9189819e84c4cc35fb56bdddfb192481041e5d42",
          "message": "Merge pull request #254 from TeoZosa/dependabot/pip/hypothesis-6.14.4",
          "timestamp": "2021-07-26T13:32:46Z",
          "tree_id": "d0ea91013f3922d1994705c3c8e5b8df09c12eab"
        },
        "date": 1627308310071,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14344.67591789898,
            "unit": "iter/sec",
            "range": "stddev: 0.00010389211989356646",
            "extra": "mean: 69.71227553159437 usec\nrounds: 12122"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3956508.6912963,
            "unit": "iter/sec",
            "range": "stddev: 0.000001219039559468691",
            "extra": "mean: 252.74808626091107 nsec\nrounds: 47394"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11883.621067341692,
            "unit": "iter/sec",
            "range": "stddev: 0.0001186472161665306",
            "extra": "mean: 84.14943512025792 usec\nrounds: 7722"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 128229.21816453687,
            "unit": "iter/sec",
            "range": "stddev: 0.000004465598266156543",
            "extra": "mean: 7.798534642212772 usec\nrounds: 39215"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13486.115036232051,
            "unit": "iter/sec",
            "range": "stddev: 0.0001766102923865572",
            "extra": "mean: 74.15033887174928 usec\nrounds: 7764"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4482291.786001491,
            "unit": "iter/sec",
            "range": "stddev: 3.9731285302374395e-7",
            "extra": "mean: 223.10015673712235 nsec\nrounds: 200000"
          }
        ]
      }
    ]
  }
}